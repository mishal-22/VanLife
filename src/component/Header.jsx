import React from 'react'
import logo from '/logo.png'
import { Link,NavLink } from 'react-router-dom'
function Header() {
    const activeStyle={
        color:'#871616',
        textDecoration:"underline",
        fontWeight:"bold"
    }
  return (
    <header>
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <nav>
            <NavLink to='/host' style={({isActive})=>isActive?activeStyle:null} >
              Host
            </NavLink>
            <NavLink to="/about" className="page1" style={({isActive})=>isActive?activeStyle:null} >
              About
            </NavLink>
            <NavLink to="/van" className="page2" style={({isActive})=>isActive?activeStyle:null}>
              Van
            </NavLink>
          </nav>
        </header>
  )
}

export default Header