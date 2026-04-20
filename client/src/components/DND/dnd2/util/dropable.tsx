"use client"

import React, { useEffect, useState } from 'react'
import { DndContext, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const Draggable = () => {

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: "box-1"
    });

     const [isMounted, setIsMounted] = useState(false);
    
      useEffect(() => {
        setIsMounted(true);
      }, []);
    const style = {
        width: 100,
        height: 100,
        backgroundColor: "blue",
        transform: CSS.Translate.toString(transform),
        cursor: "grab"
    }
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}> Drag me</div>
  )
}

export default Draggable