
import { useOutletContext } from 'react-router-dom'

function HostVanInfo() {
  const {currentvan}=useOutletContext()
  return (
    <div className='host-van-info'>
      <h3>Name: <span>{currentvan.name}</span></h3>
      <h3>Category: <span>{currentvan.type}</span></h3>
      <h3>Description: <span>{currentvan.description}</span></h3>
      <h3>Visibility:<span>Public</span> </h3>
    </div>
  )
}

export default HostVanInfo