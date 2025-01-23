import { DateTime, DateTimeUnit, Duration, Interval } from "luxon";

import mock from "./mock.json";

class WorkTime {
  /**
   * Массив временных интервалов, которые соответствуют рабочему времени.
   */
  static workIntervals = mock.map((interval) =>
    Interval.fromDateTimes(DateTime.fromISO(interval.start), DateTime.fromISO(interval.end))
  );

  /**
   * Интервал состоящий из крайних дат: Дата начала всего рабочего периода и соответствующая дата окончания.
   */
  static edgeInterval = Interval.fromDateTimes(
    WorkTime.workIntervals[0].start!,
    WorkTime.workIntervals[WorkTime.workIntervals.length - 1].end!
  );

  /**
   * Подсчитывает продолжительность рабочего времени.
   * @param to До какого datetime нужно посчитать.
   * @param from От какого datetime нужно посчитать. Если не указано, берется первая дата из workIntervals.
   * @returns Продолжительность запрашиваемого рабочего времени.
   */
  static calcWorkDuration = (to: DateTime, from: DateTime | null = null) => {
    from = from || WorkTime.edgeInterval.start!;
    const requestInterval = Interval.fromDateTimes(from, to);
    let duration = Duration.fromMillis(0);
    let stopFlag = false;
    for (const interval of WorkTime.workIntervals) {
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
  };

  /**
   * Подсчитывает продолжительность нерабочего времени.
   * @param to До какого datetime нужно посчитать.
   * @param from От какого datetime нужно посчитать. Если не указано, берется первая дата из workIntervals.
   * @returns Продолжительность запрашиваемого нерабочего времени.
   */
  static calcNonWorkDuration = (to: DateTime, from: DateTime | null = null) => {
    from = from || WorkTime.edgeInterval.start!;
    const requestInterval = Interval.fromDateTimes(from, to);
    const workDuration = WorkTime.calcWorkDuration(to, from);
    return requestInterval.toDuration().minus(workDuration);
  };

  /**
   * Возвращает нерабочее время округленное с левой стороны до resolution
   * @param to До какого datetime нужно посчитать.
   * @param resolution Значение разрешения, до какой даты нужно округлить
   */
  static calcOuterNonWorkDuration = (to: DateTime, resolution: DateTimeUnit) => {
    const from = WorkTime.edgeInterval.start!.startOf(resolution);
    return WorkTime.calcNonWorkDuration(to, from);
  };

  static timeBlockPredicate = (interval: Interval) => {
    for (const workInterval of WorkTime.workIntervals) {
      if (workInterval.intersection(interval)) {
        return true;
      }
    }
    return false;
  };
}

export default WorkTime;
