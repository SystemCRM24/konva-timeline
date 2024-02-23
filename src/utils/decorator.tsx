import { useCallback, useEffect, useState } from "react";
import { DecoratorFn } from "@storybook/react";

import { TaskData } from "..";

const DecoratorGantt: DecoratorFn = (
  Story,
  { args: { onTaskChange: externalOnTaskChange, tasks: externalTasks, ...args } }
) => {
  const [tasks, setTasks] = useState<TaskData[]>(externalTasks);

  useEffect(() => {
    if (externalTasks !== tasks) {
      setTasks(externalTasks);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalTasks]);

  const onTaskChange = useCallback(
    (task: TaskData, opts: { arr: string[]; timeDiff: number }) => {
      externalOnTaskChange && externalOnTaskChange(task, opts);
      const newTasks = tasks.map((i) => {
        if (opts && opts.arr.includes(i.id)) {
          const start = i.time.start;
          return { ...i, time: { start: Number(start) + opts.timeDiff, end: Number(i.time.end) + opts.timeDiff } };
        }
        if (i.id === task.id) {
          return task;
        }
        return i;
      });
      setTasks(newTasks);
    },
    [externalOnTaskChange, tasks]
  );

  return Story({
    args: {
      ...args,
      onTaskChange,
      tasks,
    },
  });
};

export default DecoratorGantt;
