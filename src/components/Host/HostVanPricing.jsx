import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPricing() {
  const{currentvan}=useOutletContext()
  return (
    <div>
      <h1 className='current-van-price'>${currentvan.price}<span>/day</span></h1>
    </div>
  )
}

export default HostVanPricing