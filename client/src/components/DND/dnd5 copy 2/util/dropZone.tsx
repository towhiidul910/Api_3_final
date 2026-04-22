import { useDroppable } from "@dnd-kit/core";
// import DraggableBox4 from "./droppableBox";
import DraggableBox5 from "./droppableBox";
import { boxType } from "../dnd.component.5";

export type Location5 = "dz-1" | "dz-2" | "dz-3" | "dz-4" | "dz-5";

export const items: boxType[]= ["box-1", "box-2"]

export function DropZone({
  id,
  items,
}: {
  id: Location5;
  items: boxType[]
}) {
  const { setNodeRef, isOver } = useDroppable({ id });

  const style = {
    width: 200,
    height: 200,
    border: "2px dashed black",
    background: isOver ? "#d1e7dd" : "transparent",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {id}
        {/* Render items only if their location matches this zone */}
      {items.map((itemId) => (
        <DraggableBox5 key={itemId} id={itemId}/>
      ))}
    </div>
  );
}
