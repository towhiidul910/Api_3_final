import { useDroppable } from "@dnd-kit/core";
import DraggableBox from "./dropable.box";

export  function LeftZone({ location }: { location: "left" | "right"}) {
    const { setNodeRef, isOver } = useDroppable({
      id: "left",
    });

    return (
      <div
        ref={setNodeRef}
        style={{
          width: 200,
          height: 200,
          border: "2px dashed black",
          background: isOver ? "#d1e7dd" : "transparent",
        }}
      >
        Left Zone
        {location === "left" && <DraggableBox />}
      </div>
    );
  }

export  function RightZone({location}: {location: "right" | "left"}) {
    const { setNodeRef, isOver } = useDroppable({
      id: "right",
    });

    return (
      <div
        ref={setNodeRef}
        style={{
          width: 200,
          height: 200,
          border: "2px dashed black",
          background: isOver ? "#d1e7dd" : "transparent",
        }}
      >
        Right Zone
        {location === "right" && <DraggableBox />}
      </div>
    );
  }
//* 🧠 What is isOver?
// true → something is currently hovering
// false → empty zone

// That’s your visual feedback system.