import { useDroppable } from "@dnd-kit/core";
import DraggableBox4 from "./droppableBox";

export type Location4 = "dz-1" | "dz-2" | "dz-3" | "dz-4" | "dz-5" 



export function DZ_1({location}: {location: Location4}) {
    const {setNodeRef, isOver} = useDroppable({
        id: "dz-1",
    })

    const style = { width: 200,
          height: 200,
          border: "2px dashed black",
          background: isOver ? "#d1e7dd" : "transparent",}
    return (
        <div ref={setNodeRef} style={style}>
            DZ_1
            {location === "dz-1" && <DraggableBox4/>}
        </div>
    )
}

export function DropZone({id, activeLocation} : {id: Location4; activeLocation: Location4}) {
    const {setNodeRef, isOver} = useDroppable({id});

    const style = { width: 200,
          height: 200,
          border: "2px dashed black",
          background: isOver ? "#d1e7dd" : "transparent",}

    return (
        <div ref={setNodeRef} style={style}>
            {id}
            {activeLocation === id && <DraggableBox4/>}
        </div>
    )
}


