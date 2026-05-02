"use client";

import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";

// sortable-specific util
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

// utility to convert transform object -> css string
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

/* =========================================================
   🔹 Sortable Item Component
   Each item becomes draggable + sortable
========================================================= */
function SortableItem({ id }: { id: string }) {
  /*
    useSortable does EVERYTHING:
    - makes item draggable
    - tracks its position
    - handles animation
  */

  const {
    attributes, // accessibility + required props
    listeners, // drag event listeners (mouse/touch)
    setNodeRef, // connect DOM node to dnd-kit
    transform, // movement while dragging
    transition, // smooth animation
    isDragging, // optional: useful for styling
  } = useSortable({ id });

  //   convert moving data -> actual css transform

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,

    padding: "16px",
    marginBottom: "10px",
    background: isDragging ? "#87cefa" : "#add8e6",
    border: "1px solid #ccc",
    borderRadius: "8px",
    cursor: "grab",
    userSelect: "none",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  );
}

/* =========================================================
   🔹 Main Page Component
========================================================= */

export default function Dnd7() {
  /*
    🧠 STATE = ORDER OF ITEMS

    This array defines EVERYTHING:
    - rendering order
    - drag result
  */

  const [items, setItems] = useState<string[]>([
    "item-1",
    "item-2",
    "item-3",
    "item-4",
  ]);

  /*
    🔥 This is the brain of the system
    Runs when drag ends
  */

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    /*
      active.id = what you're dragging
      over.id   = what you're hovering over
    */

    if (!over) return; // dropped outside -> ignore

    if (active.id !== over.id) {
      setItems((prev) => {
        // find position in array
        const oldIndex = prev.indexOf(active.id as string);
        const newIndex = prev.indexOf(over.id as string);

        // move item in array , this triggers react re-render -> ui update

        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  }

  return (
    // DndContext = global drag system

    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      {/* //   SortableContext tells dnd-kit:  "these items are reorderable" */}

      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div style={{ maxWidth: 300, margin: "40px auto" }}>
          {items.map((id) => (
            <SortableItem key={id} id={id} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
