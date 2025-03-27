import type { Meta, StoryObj } from "@storybook/react";

import DecoratoGantt from "../utils/stories/decorators/Gantt";
import { generateStoryData } from "../utils/stories/utils";

import data from "./mock.json";
import KonvaTimeline from ".";

const meta = {
  title: "Scenario/MandarinGantt",
  component: KonvaTimeline,
  decorators: [DecoratoGantt],
  tags: ["autodocs"],
  argTypes: {
    onTaskClick: {
      type: "function",
    },
    onTaskChange: {
      type: "function",
    },
  },
} satisfies Meta<typeof KonvaTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

const { resources } = generateStoryData({
  averageTaskDurationInMinutes: 200,
  resourcesCount: 3,
  tasksCount: 5,
  timeRangeInDays: 1,
});

export const Line: Story = {
  args: {
    onAreaSelect: undefined,
    resources,
    resolution: "1day",
    enableLines: true,
    toolTip: true,
    displayTasksLabel: true,
    onTaskClick: (task) => task,
    initialDateTime: undefined,
    range: {
      start: "2025-02-24T00:00:00+03:00",
      end: "2025-03-16T23:59:59+03:00",
    },
    workIntervals: data,
    isoNow: '2025-03-04T10:00:00+03:00',
    tasks: [
      {
        id: "1",
        label: "Полностью 1 день",
        resourceId: "1",
        time: {
          start: "2025-03-04T09:00:00+03:00",
          end: "2025-03-04T18:00:00+03:00",
        },
        taskColor: "#dc3545",
      },
      {
        id: "2",
        label: "Часть одного дня",
        resourceId: "2",
        time: {
          start: "2025-03-05T09:30:00+03:00",
          end: "2025-03-05T12:00:00+03:00",
        },
      },
      {
        id: "3",
        label: "C одного дня на другой",
        resourceId: "2",
        time: {
          start: "2025-03-05T12:00:00+03:00",
          end: "2025-03-06T10:15:00+03:00",
        },
      },
      {
        id: "4",
        label: "Следует визуально за первой задачей",
        resourceId: "1",
        time: {
          start: "2025-03-05T09:00:00+03:00",
          end: "2025-03-05T18:00:00+03:00",
        },
      },
      {
        id: "5",
        label: "На 3 дня",
        resourceId: "3",
        time: {
          start: "2025-03-04T09:00:00+03:00",
          end: "2025-03-06T18:00:00+03:00",
        },
      },
    ],
    onTaskChange: (task, opts) => {
      task.id, opts;
    },
  },
};
