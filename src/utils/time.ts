import { DateTime, Interval } from "luxon";

import { ResolutionData } from "./time-resolution";

type TimeInput = number | string;

export interface TimeRange {
  /**
   * Start of time range interval
   */
  start: TimeInput;
  /**
   * End of time range interval
   */
  end: TimeInput;
}

export interface InternalTimeRange {
  start: number;
  end: number;
}

/**
 * Returns valid date based on input, otherwise now
 * @param date the input date (number or string formats)
 */
export const getValidTime = (date: TimeInput, timezone: string | undefined): number => {
  const tz = timezone || "system";
  const dateInMillis = typeof date === "number" ? date : DateTime.fromISO(date, { zone: tz }).toMillis();
  if (Number.isNaN(dateInMillis)) {
    return new Date().getTime();
  }

  return dateInMillis;
};

/**
 * Converts a TimeRange to a luxon Interval
 * @param range TimeRange to convert
 */
export const getIntervalFromInternalTimeRange = (
  { start, end }: InternalTimeRange,
  resolution: ResolutionData,
  timezone: string | undefined
): Interval => {
  const tz = timezone || "system";
  const startDateTime = DateTime.fromMillis(start, { zone: tz }).startOf(resolution.unitAbove);
  const endDateTime = DateTime.fromMillis(end, { zone: tz }).endOf(resolution.unitAbove);
  return Interval.fromDateTimes(startDateTime, endDateTime);
};
