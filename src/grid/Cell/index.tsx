import React, { memo, useMemo } from "react";
import { Interval } from "luxon";

import { KonvaGroup, KonvaLine, KonvaText } from "../../@konva";
import { useTimelineContext } from "../../timeline/TimelineContext";
import { DEFAULT_STROKE_DARK_MODE, DEFAULT_STROKE_LIGHT_MODE } from "../../utils/theme";
import { displayInterval } from "../../utils/time-resolution";

interface GridCellProps {
  column: Interval;
  height: number;
  index: number;
  hourInfo: {
    backHour?: boolean;
    nextHour?: boolean;
  };
}

const GridCell = ({ column, height, index, hourInfo: visibleDayInfo }: GridCellProps) => {
  const {
    blocksOffset,
    columnWidth,
    resolution: { unit: resolutionUnit },
    resolution,
    rowHeight,
    dateLocale,
    theme: { color: themeColor },
  } = useTimelineContext();

  const cellLabel = useMemo(
    () => displayInterval(column, resolutionUnit, dateLocale!),
    [column, resolutionUnit, dateLocale]
  );

  const xPos = useMemo(() => {
    if (resolutionUnit === "day") {
      if (visibleDayInfo.backHour) {
        return columnWidth * (index + blocksOffset) + columnWidth / 24;
      }
      if (visibleDayInfo.nextHour) {
        return columnWidth * (index + blocksOffset) - columnWidth / 24;
      }
    }
    if (resolutionUnit === "week") {
      if (visibleDayInfo.backHour) {
        return columnWidth * (index + blocksOffset) + columnWidth / 168;
      }
      if (visibleDayInfo.nextHour) {
        return columnWidth * (index + blocksOffset) - columnWidth / 168;
      }
    }
    // WorkTime logic
    let divider;
    switch (resolution.label) {
      case "1 Minute":
      case "5 Minutes":
      case "10 Minutes":
      case "15 Minutes":
      case "30 Minutes":
      case "1 Hour":
      case "2 Hours":
      case "1/4 of Day":
      case "1/2 of Day":
      case "1 Day":
        divider = 24 / 9;
        break;
      case "1 Week":
      case "2 Weeks":
      default:
        divider = 1;
    }
    return (columnWidth * (index + blocksOffset)) / divider;
  }, [blocksOffset, columnWidth, index, visibleDayInfo, resolutionUnit, resolution]);

  const yPos = useMemo(() => rowHeight * 0.8, [rowHeight]);

  const stroke = useMemo(() => {
    if (themeColor === "black") {
      return DEFAULT_STROKE_LIGHT_MODE;
    }
    return DEFAULT_STROKE_DARK_MODE;
  }, [themeColor]);

  return (
    <KonvaGroup key={`timeslot-${index}`}>
      <KonvaLine x={xPos} y={yPos} points={[0, 0, 0, height]} stroke={stroke} strokeWidth={1} />
      <KonvaText fill={themeColor} x={xPos - 200} y={yPos - 8} text={cellLabel} width={columnWidth} align="center" />
    </KonvaGroup>
  );
};

export default memo(GridCell);
