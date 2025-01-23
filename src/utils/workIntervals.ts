import { DateTime, DateTimeUnit, Duration, Interval } from "luxon";

/**
 * Типизация интервала для рабочего дня который проиходит ответом от сервера.
 */
export type RawInterval = {start: string, end: string};


export class WorkTime {
    /**
     * Массив временных интервалов, которые соответствуют рабочему времени.
     */
    intervals: Interval[];

    /**
     * Интервал, который соовтетствеует 1 дате начала рабочего периода и последней дате окончания.
     */
    total: Interval;

    /**
     * @param intervals Массив рабочих интервалов.
     */
    constructor(intervals: RawInterval[]) {
        this.intervals = intervals.map(
            (interval) => Interval.fromDateTimes(
                DateTime.fromISO(interval.start), 
                DateTime.fromISO(interval.end)
            )
        );
        this.total = Interval.fromDateTimes(
            this.intervals[0].start!,
            this.intervals[this.intervals.length - 1].end!
        );
    }

    /**
     * Подсчитывает продолжительность рабочего времени.
     * @param to До какого datetime нужно посчитать.
     * @param from От какого datetime нужно посчитать. Если не указано, берется первая дата из workIntervals.
     * @returns Продолжительность запрашиваемого рабочего времени.
     */
    calcWorkDuration(to: DateTime, from: DateTime | null = null) {
        from = from || this.total.start!;
        const requestInterval = Interval.fromDateTimes(from, to);
        let duration = Duration.fromMillis(0);
        let stopFlag = false;
        for (const interval of this.intervals) {
            const intersection = requestInterval.intersection(interval);
            if (intersection !== null) {
                duration = duration.plus(intersection.toDuration());
                stopFlag = true;
                continue;
            }
            if (stopFlag) {
                break;
            }
        }
        return duration;
    }

    /**
     * Подсчитывает продолжительность нерабочего времени.
     * @param to До какого datetime нужно посчитать.
     * @param from От какого datetime нужно посчитать. Если не указано, берется первая дата из workIntervals.
     * @returns Продолжительность запрашиваемого нерабочего времени.
     */
    calcNonWorkDuration(to: DateTime, from: DateTime | null = null) {
        from = from || this.total.start!;
        const requestInterval = Interval.fromDateTimes(from, to);
        const workDuration = this.calcWorkDuration(to, from);
        return requestInterval.toDuration().minus(workDuration);
    }

    /**
     * Возвращает нерабочее время округленное с левой стороны до resolution
     * @param to До какого datetime нужно посчитать.
     * @param resolution Значение разрешения, до какой даты нужно округлить
     */
    calcOuterNonWorkDuration(to: DateTime, resolution: DateTimeUnit) {
        const from = this.total.start!.startOf(resolution);
        return this.calcNonWorkDuration(to, from);
    }

    timeBlockPredicate(interval: Interval) {
        for (const workInterval of this.intervals) {
            if (workInterval.intersection(interval)) {
                return true;
            }
        }
        return false;
    }
}
