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
    initialDateTime: "2025-01-13T13:00:00+03:00",
    range: {
      start: "2025-01-06T00:00:00+03:00",
      end: "2025-01-26T23:59:59+03:00",
    },
    workIntervals: data,
    tasks: [
      {
        id: "1",
        label: "Полностью 1 день",
        resourceId: "1",
        time: {
          start: "2025-01-13T09:00:00+03:00",
          end: "2025-01-13T18:00:00+03:00",
        },
        taskColor: "#dc3545",
      },
      {
        id: "2",
        label: "Часть одного дня",
        resourceId: "2",
        time: {
          start: "2025-01-14T09:30:00+03:00",
          end: "2025-01-14T12:00:00+03:00",
        },
      },
      {
        id: "3",
        label: "C одного дня на другой",
        resourceId: "2",
        time: {
          start: "2025-01-14T12:00:00+03:00",
          end: "2025-01-15T10:15:00+03:00",
        },
      },
      {
        id: "4",
        label: "Следует визуально за первой задачей",
        resourceId: "1",
        time: {
          start: "2025-01-14T09:00:00+03:00",
          end: "2025-01-14T18:00:00+03:00",
        },
      },
      {
        id: "5",
        label: "На 3 дня",
        resourceId: "3",
        time: {
          start: "2025-01-13T09:00:00+03:00",
          end: "2025-01-15T18:00:00+03:00",
        },
      },
    ],
    onTaskChange: (task, opts) => {
      console.log(task, opts);
      task.id, opts;
    },
  },
};
