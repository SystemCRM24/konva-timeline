import mock from "./mock.json";
import { DateTime, Interval, Duration, DateTimeUnit } from "luxon";


namespace WorkTime {
    /**
     * Массив временных интервалов, которые соответствуют рабочему времени.
     */
    const workIntervals = mock.map(interval => Interval.fromDateTimes(
        DateTime.fromISO(interval.start),
        DateTime.fromISO(interval.end)
    ));

    /**
     * Интервал состоящий из крайних дат: Дата начала всего рабочего периода и соответствующая дата окончания.
     */
    export const edgeInterval = Interval.fromDateTimes(
        workIntervals[0].start!,
        workIntervals[workIntervals.length - 1].end!
    );

    /**
     * Подсчитывает продолжительность рабочего времени.
     * @param to До какого datetime нужно посчитать.
     * @param from От какого datetime нужно посчитать. Если не указано, берется первая дата из workIntervals.
     * @returns Продолжительность запрашиваемого рабочего времени.
     */
    export const calcWorkDuration = (to: DateTime, from: DateTime | null = null) => {
        from = from || edgeInterval.start!;
        const requestInterval = Interval.fromDateTimes(from, to);
        let duration = Duration.fromMillis(0);
        let stopFlag = false;
        for ( const interval of workIntervals ) {
            const intersection = requestInterval.intersection(interval);
            if ( intersection !== null ) {
                duration = duration.plus(intersection.toDuration());
                stopFlag = true;
                continue;
            }
            if ( stopFlag ) {
                break;
            }
        }
        return duration;
    };

    /**
     * Подсчитывает продолжительность нерабочего времени.
     * @param to До какого datetime нужно посчитать.
     * @param from От какого datetime нужно посчитать. Если не указано, берется первая дата из workIntervals.
     * @returns Продолжительность запрашиваемого нерабочего времени.
     */
    export const calcNonWorkDuration = (to: DateTime, from: DateTime | null = null) => {
        from = from || edgeInterval.start!;
        const requestInterval = Interval.fromDateTimes(from, to);
        const workDuration = calcWorkDuration(to, from);
        return requestInterval.toDuration().minus(workDuration);
    };

    /**
     * Возвращает нерабочее время округленное с левой стороны до resolution
     * @param to До какого datetime нужно посчитать.
     * @param resolution Значение разрешения, до какой даты нужно округлить
     */
    export const calcOuterNonWorkDuration = (to: DateTime, resolution: DateTimeUnit) => {
        const from = edgeInterval.start!.startOf(resolution);
        return calcNonWorkDuration(to, from);
    }

    export const timeBlockPredicate = (interval: Interval) => {
        for ( const workInterval of workIntervals ) {
            if ( workInterval.intersection(interval) ) {
                return true;
            }
        } 
        return false;
    }
}

export default WorkTime;