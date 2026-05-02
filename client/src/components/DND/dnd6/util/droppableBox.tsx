
"use client";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const DraggableBox = ({ id }: { id: string }) => {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        width: 80,
        height: 80,
        margin: "5px 0",
        backgroundColor: "orange",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: CSS.Translate.toString(transform),
        cursor: "grab",
      }}
    >
      {id}
    </div>
  );
};

export default DraggableBox;