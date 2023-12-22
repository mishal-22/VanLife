import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function VanDetails() {
    const param=useParams()
    const [van,SetVan]=useState([])
    useEffect(()=>{
        fetch(`/api/vans/${param.id}`)
        .then(res=>res.json())
        .then(data=>SetVan(data.vans))
    },[param.id])

  return (
    <div className="van-details">
      <img src={van.imageUrl} />
      <br />
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
      <h1>{van.name}</h1>
      <p className="price">
        ${van.price}
        <span>/day</span>
      </p>
      <p className="desc">{van.description}</p>
      <h3>Rent this van </h3>
    </div>
  );
}

export default VanDetails