"use client"

import React, { useEffect, useState } from 'react'
import { DndContext, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const DraggableBox = () => {

   const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: "box-1"
    });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

   

    const style = {
           width: 80,
          height: 80,
          backgroundColor: "orange",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: CSS.Translate.toString(transform),
          cursor: "grab",
    }

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}> Drag me Box 3</div>
  ) 
}

export default DraggableBox