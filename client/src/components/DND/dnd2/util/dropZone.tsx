// well create a drop zone
"use client"


import {useDroppable} from "@dnd-kit/core"

export function DropZone() {
    const {setNodeRef, isOver} = useDroppable({
        id: "drop-zone"
    })

    const style = {
         width: 200,
        height: 200,
        border: "2px dashed black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isOver ? "lightgreen" : "transparent",
    }

    return (
        <div ref={setNodeRef} style={style}>
            Drop here
        </div>
    )
}

//* 🧠 What is isOver?
// true → something is currently hovering
// false → empty zone

// That’s your visual feedback system.