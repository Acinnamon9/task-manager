"use client";

import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  onDelete,
}: {
  tasks: string[];
  onDelete: (index: number) => void;
}) {
  return (
    <ul className="space-y-2">
      {tasks.map((task, i) => (
        <TaskItem key={i} task={task} onDelete={() => onDelete(i)} />
      ))}
    </ul>
  );
}
