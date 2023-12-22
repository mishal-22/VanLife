import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HostVan() {
    const[vans,setVans]=useState([])
    useEffect(()=>{
          fetch('/api/host/vans')
          .then(res=>res.json())
          .then(data=>setVans(data.vans))
    },[])

    const Element=vans.map(van=>(
        <Link to={`/host/vans/${van.id}`} key={van.id}>
            <div  className='host-van-tile'>
              <img src={van.imageUrl}/>
              <div className='host-van-info'>
                <h2>{van.name}</h2>
                <h3>${van.price}<span>/day</span></h3>
              </div>
        </div>
        </Link>
    ))
  return (
    <div className='host-van'>
    <h1>Your listed vans</h1>
    <section>
        {Element}
    </section>

    </div>
  )
}

export default HostVan