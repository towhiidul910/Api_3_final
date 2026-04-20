import React from 'react'
import DroppableComponent from './dnd1/Droppable'
import Dnd2 from './dnd2/dnd.component.1'
import Dnd3 from './dnd3/dnd.component.3'
import Dnd4 from './dnd4/dnd.component.4'

const DNDComponent = () => {
  return (
    <div>
        <Dnd2/>
        <Dnd3/><Dnd4/>
    </div>
  )
}

export default DNDComponent