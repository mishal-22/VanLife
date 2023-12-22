import React from 'react'
import {NavLink, Link, Outlet } from 'react-router-dom'

function HostLayout() {
    const activeStyle={
        color:"#871616",
        textDecoration:"underline",
        fontWeight:"bold"
    }
  return (
    <div>
        <nav className='host-nav'>
            <NavLink to='.' end style={({isActive})=>isActive?activeStyle:null}>
              Dashboard
              </NavLink>
            <NavLink to='income' style={({isActive})=>isActive?activeStyle:null}>
              Income
              </NavLink>
            <NavLink to='vans' style={({isActive})=>isActive?activeStyle:null}>
              Vans
              </NavLink>
            <NavLink to='reviews' style={({isActive})=>isActive?activeStyle:null}>
              Reviews
              </NavLink>

        </nav>
        <Outlet/>



    </div>
  )
}

export default HostLayout