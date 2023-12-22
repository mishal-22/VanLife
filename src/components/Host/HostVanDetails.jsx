import React, { useEffect, useState } from 'react'
import { useParams,Link, Outlet,NavLink } from 'react-router-dom'

function HostVanDetails() {
  const activeStyle={
    color:"#871616",
    textDecoration:"underline",
    fontWeight:"bold"
}
  const[currentvan,setCurrentVan]=useState(null)
  const {id}=useParams()
  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
        .then(res => res.json())
        .then(data => setCurrentVan(data.vans))
}, [])
  if(!currentvan){
    return <h1>Loading...</h1>
  }
  return (
   <div className='host-van-details'>
    <Link className='back-to-vans' to='..' relative='path'>&larr;<span>Back to all vans</span> </Link>
    <div className='current-van-detail'>
    <div className='currentVan'>
      <img src={currentvan.imageUrl}  />
      <div className='current-van-info'>

        <p className={`current-option ${currentvan.type}`} >{currentvan.type}</p>
        <h2 >{currentvan.name}</h2>
        <h3>${currentvan.price}<span>/day</span></h3>
      </div>
    </div>
    <nav className='currnet-van-details-nav'>
       <NavLink to='.' end style={({isActive})=>isActive?activeStyle:null} >Details</NavLink>
       <NavLink to='pricing' style={({isActive})=>isActive?activeStyle:null}>Pricing</NavLink>
       <NavLink to='photos' style={({isActive})=>isActive?activeStyle:null}>Photos</NavLink>
    </nav>
    <Outlet context={{currentvan}}/>
    </div>
    
    </div>

  )
}

export default HostVanDetails