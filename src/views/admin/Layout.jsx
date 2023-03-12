import React from "react"
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import NavMenu from './NavMenu'

const Layout = () => {
  return (
    <>
      <NavMenu/>
      <Outlet/>
    </>
  )
}

export default Layout
