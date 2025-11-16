"use client";

import { useState } from "react";

export default function TaskInput({
  onAdd,
}: {
  onAdd: (task: string) => void;
}) {
  const [value, setValue] = useState("");

  const submit = () => {
    if (!value.trim()) return;
    onAdd(value.trim());
    setValue("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        className="flex-1 border rounded p-2"
        placeholder="New task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={submit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
}
