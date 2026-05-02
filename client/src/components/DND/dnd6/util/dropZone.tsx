
"use client";

import { useDroppable } from "@dnd-kit/core";
import DraggableBox from "./droppableBox";
import { boxType } from "../../dnd5 copy/dnd.component.5";
// import { boxType } from "../dnd.component";

export type Location5 = "dz-1" | "dz-2" | "dz-3" | "dz-4" | "dz-5";

export function DropZone({
  id,
  items,
}: {
  id: Location5;
  items: boxType[];
}) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        width: 200,
        minHeight: 200,
        border: "2px dashed black",
        padding: 10,
        background: isOver ? "#d1e7dd" : "transparent",
      }}
    >
      <h4>{id}</h4>

      {items.map((itemId) => (
        <DraggableBox key={itemId} id={itemId} />
      ))}
    </div>
  );
}