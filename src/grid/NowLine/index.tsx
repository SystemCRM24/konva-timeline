import React, {useCallback} from "react";
import { Layer } from "react-konva";
import { KonvaLine, KonvaText } from "../../@konva";

import { useTimelineContext } from "../../timeline/TimelineContext";


interface NowLineProps {
  rowHeight: number;
  stageHeight: number;
  columnWidth: number;
}


const NowLine = ({rowHeight, stageHeight, columnWidth}: NowLineProps) => {
  const {
    interval: { start: intervalStart },
    resolution,
    workTime,
    now,
  } = useTimelineContext();

  const getXCoordinate = useCallback(
    (offset: number) => (offset * columnWidth) / resolution.sizeInUnits,
    [columnWidth, resolution.sizeInUnits]
  );
  
  const getLineXCoordinate = useCallback(
    () => {
      const timeStart = now;
      let startOffsetInUnit = timeStart.diff(intervalStart!);
      // WorkTime logic
      const nonWorkTimeDiff = workTime.calcOuterNonWorkDuration(now, 'day');
      startOffsetInUnit = startOffsetInUnit.minus(nonWorkTimeDiff);
      // end
      return getXCoordinate(startOffsetInUnit.as(resolution.unit));
    },
    [getXCoordinate, intervalStart, resolution.unit]
  );
  const x = getLineXCoordinate();

  return (
    <Layer>
      <KonvaLine
        x={x}
        y={rowHeight * 0.8}
        points={[0, 0, 0, stageHeight]}
        stroke="red"
        strokeWidth={1}
        dash={[8, 3]}
      />
      <KonvaText 
        fill="red" 
        x={x} 
        y={rowHeight * 0.8 - 20} 
        text={now.toISOTime()?.slice(0, 5)} 
        width={columnWidth}
      />
    </Layer>
  );
};

export default NowLine;