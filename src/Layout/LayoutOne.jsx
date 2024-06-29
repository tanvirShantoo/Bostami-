import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'

const LayoutOne = () => {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default LayoutOne

