import { DateTime, Interval } from "luxon";

import { ResolutionData } from "./time-resolution";

type TimeInput = number | string | Date;

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
  let dateInMillis;
  switch (typeof date) {
    case "number":
      dateInMillis = date;
      break;
    case "string":
      dateInMillis = DateTime.fromISO(date, { zone: tz }).toMillis();
      break;
    case "object":
      dateInMillis = DateTime.fromJSDate(date, { zone: tz }).toMillis();
      break;
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
