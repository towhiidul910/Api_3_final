import React from 'react'
import Function from './function/page'
import FunctionClassMethod from './classes/classes/page'
import { ClassTest, MappedTypeCheck } from './classes/classes2/page'
import ProtoType, { PrototypeInstanceofVisualizer } from './classes/prtotype instanceof inharitance extends/page'

const page = () => {
  return (
    <div>
        
    {/* <Function/> */}
    {/* <FunctionClassMethod/> */}
    {/* <Attack/> */}
    {/* <ClassTest/> */}
    {/* <MappedTypeCheck/> */}
    <ProtoType/>
    <PrototypeInstanceofVisualizer/>
    </div>
  )
}

export default page