"use client"

import Draggable from '@/components/DND/dnd2/util/dropable'
import { DropZone } from '@/components/DND/dnd2/util/dropZone'
// import { DropZone } from '@/components/DND/util/dropZone'
import { DndContext, DragEndEvent } from '@dnd-kit/core'


const Dnd2 = () => {



   const handleDragEnd = (event: DragEndEvent) => {
    const {over} = event;
    
    // 👇 this is the real "drop result"
    if (over) {
        console.log("Dropped on:", over.id)
    } else {
        console.log("Dropped in empty space" )
    }
   }


   
  return (
    <div>
        <DndContext onDragEnd={handleDragEnd}>
            <div>sell build inside here</div>
            <h1>Simple Draggable</h1>
            <Draggable/>

            <h1>Droppable Zone</h1>
            <DropZone/>
        </DndContext>

    </div>
  )
}

export default Dnd2