import React, { memo, useMemo } from "react";
import { Interval } from "luxon";

import { KonvaGroup, KonvaLine, KonvaRect, KonvaText } from "../../@konva";
import { useTimelineContext } from "../../timeline/TimelineContext";
import { displayInterval } from "../../utils/time-resolution";

interface GridCellProps {
  column: Interval;
  height: number;
  index: number;
  visibleDayInfo: {
    backHour?: boolean;
    nextHour?: boolean;
  };
}

const GridCell = ({ column, height, index, visibleDayInfo }: GridCellProps) => {
  const {
    blocksOffset,
    columnWidth,
    resolution: { unit: resolutionUnit },
    rowHeight,
    theme: { color: themeColor },
  } = useTimelineContext();

  const cellLabel = useMemo(() => displayInterval(column, resolutionUnit), [column, resolutionUnit]);

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
    return columnWidth * (index + blocksOffset);
  }, [blocksOffset, columnWidth, index, visibleDayInfo, resolutionUnit]);

  const yPos = useMemo(() => rowHeight * 0.8, [rowHeight]);

  return (
    <KonvaGroup key={`timeslot-${index}`}>
      <KonvaLine x={xPos} y={yPos} points={[0, 0, 0, height]} stroke="gray" strokeWidth={1} />
      <KonvaRect fill="transparent" x={xPos - 15} y={yPos - 10} height={15} width={30} />
      <KonvaText fill={themeColor} x={xPos - 15} y={yPos - 8} text={cellLabel} />
    </KonvaGroup>
  );
};

export default memo(GridCell);
