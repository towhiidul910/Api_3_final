"use client";

import { useDroppable } from "@dnd-kit/core";


export default function DroppableZone({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`p-4 border rounded min-h-[150px] ${
        isOver ? "bg-blue-100" : ""
      }`}>
      {children}
    </div>
  );
}
