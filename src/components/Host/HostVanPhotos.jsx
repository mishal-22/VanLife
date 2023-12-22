import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPhotos() {
  const {currentvan}=useOutletContext()
  return (
    <div>
      <img src={currentvan.imageUrl}  className='current-van-photos' />
    </div>
  )
}

export default HostVanPhotos