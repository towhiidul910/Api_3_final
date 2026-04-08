"use client"
import Link from 'next/link'
import React from 'react'

 const Unauthorized = () => {
  return (
    <>
    <div>Unauthorized</div> <hr />
    <p>please</p> 
    <Link href="/login">Login</Link>
    </>
  )
}

export default Unauthorized