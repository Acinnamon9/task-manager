"use client";

export default function TaskItem({
  task,
  onDelete,
}: {
  task: string;
  onDelete: () => void;
}) {
  return (
    <li className="flex justify-between bg-gray-100 p-3 rounded">
      <span>{task}</span>
      <button className="text-red-600" onClick={onDelete}>
        ✕
      </button>
    </li>
  );
}
