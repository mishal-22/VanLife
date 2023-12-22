import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import './App.css'
import '../server'
import Body from './components/Body'
import About from './components/About'
import Van from './components/Vans/Van'
import VanDetails from './components/Vans/VanDetails'
import Layout from './component/Layout'
import Dashboard from './components/Host/Dashboard'
import Income from './components/Host/Income'
import Reviews from './components/Host/Reviews'
import HostLayout from './component/HostLayout'
import HostVan from './components/Host/HostVan'
import HostVanDetails from './components/Host/HostVanDetails'
import HostVanInfo from './components/Host/HostvanInfo'
import HostVanPricing from './components/Host/HostVanPricing'
import HostVanPhotos from './components/Host/HostVanPhotos'

function App() {

  return (
    <div className="pages">
      <BrowserRouter>
        

      <Routes className="components">
          <Route element={<Layout/>} path='/'>
          <Route element={<Body />} index />
          <Route element={<About />} path="about" />
          <Route element={<Van />} path="van" />
          <Route element={<VanDetails />} path="van/:id" />
        <Route element={<HostLayout/>} path='host'>
          <Route element={<Dashboard/>} index/>
          <Route element={<Income />} path="income" />
          <Route element={<Reviews />} path="reviews" />
          <Route element={<HostVan />} path="vans" />
          <Route element={<HostVanDetails />} path="vans/:id" >
            <Route element={<HostVanInfo/>} index/>
            <Route element={<HostVanPricing/>} path='pricing'/>
            <Route element={<HostVanPhotos/>} path='photos'/>
          </Route>
        </Route>
      </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App
