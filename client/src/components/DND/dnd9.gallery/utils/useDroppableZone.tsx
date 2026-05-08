import {useDroppable} from "@dnd-kit/core"

export default function DroppableZone({id, children}: {id: string; children: React.ReactNode}) {
    const {setNodeRef, isOver} = useDroppable({id})


    return (
        <div ref={setNodeRef} className={`
        p-4 border rounded-xl
        grid grid-cols-3 gap-3
        min-h-[300px] 
        ${isOver ? "bg-blue-50" : "bg-gray"}
      `}>
            {children}
        </div>
    )
}