"use client"

import Draggable from '@/components/DND/dnd3/util/dropable.box'
// import { DropZone } from '@/components/DND/dnd3/util/dropZone'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { useState } from 'react';
import { LeftZone, RightZone } from './util/dropZone';

export type Location = "left" | "right";

const Dnd3 = () => {

const [location, setLocation ] = useState<Location>("left")

   const handleDragEnd = (event: DragEndEvent) => {
    const {over} = event;
    
    if (!over) return
 
    // 👇 this is the real "drop result"
    if (over.id === "right") {
        setLocation("right")
        console.log("Dropped on:", over.id)
    } 

    if (over.id === "left") {
        setLocation("left")
    }
   }


   
  return (
    <div>
        <DndContext onDragEnd={handleDragEnd}>
            {/* <div>sell build inside here</div> */}
            {/* <h1>Simple Draggable</h1> */}
            {/* <Draggable/> */}

            <h1>Droppable Zone</h1>
            {/* <DropZone/> */}

            {/* {location === "left" &&  <LeftZone location={location} />}
            {location === "right" &&  <RightZone location={location} />} */}

            <LeftZone location={location} />
            <RightZone location={location}/>
        </DndContext>

    </div>
  )
}

export default Dnd3