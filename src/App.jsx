import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './index.css';
import NotFound from './pages/NotFound';
import FiberGlassProducts from './pages/FiberGlassProducts';
import GeorgeFisher from './pages/GeorgeFisher';
import Machinery from './pages/Machinery';
import Pumps from './pages/Pumps';
import PipingSystem from './pages/PipingSystem';
import Instrument from './pages/Instrument';
import Agitator from './pages/Agitator';
import FlowLine from './pages/FlowLine';
import FlowMeter from './pages/FlowMeter';
import MetalFabrication from './pages/MetalFabrication';
import DiamantCold from './pages/DiamentCold';
import Dichtol from './pages/Dichtol'
import PlasticMetal from './pages/PlasticMetal'
import MultiMetal from './pages/MultiMetal'
import UltraMetal from './pages/UltraMetal'
import Moglice from './pages/Moglice'
import Procoat from './pages/Procoat'
import DWH from './pages/DWH'




const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products/fiberGlass' element={<FiberGlassProducts/>}/>
        <Route path='/products/machinery' element={<Machinery/>}/>
        <Route path='/products/machinery/pumps' element={<Pumps/>}/>
        <Route path='/products/machinery/georgeFisher' element={<GeorgeFisher/>}/>
        <Route path='/products/machinery/pipingSystem' element={<PipingSystem/>}/>
        <Route path='/products/diamantColdWeldingMaterial' element={<DiamantCold/>}/>
        <Route path='/products/diamantColdWeldingMaterial/dichtol' element={<Dichtol/>}/>
        <Route path='/products/diamantColdWeldingMaterial/plasticMetal' element={<PlasticMetal/>}/>
        <Route path='/products/diamantColdWeldingMaterial/multiMetal' element={<MultiMetal/>}/>
        <Route path='/products/diamantColdWeldingMaterial/ultraMetal' element={<UltraMetal/>}/>
        <Route path='/products/diamantColdWeldingMaterial/moglice' element={<Moglice/>}/>
        <Route path='/products/diamantColdWeldingMaterial/procoat' element={<Procoat/>}/>
        <Route path='/products/diamantColdWeldingMaterial/dwh' element={<DWH/>}/>
        <Route path='/products/instrument' element={<Instrument/>}/>
        <Route path="/products/instrument/agitator" element={<Agitator/>}/>
        <Route path="/products/instrument/flowLine" element={<FlowLine/>}/>
        <Route path="/products/instrument/flowMeter" element={<FlowMeter/>}/>
        <Route path='/products/metalFabrication' element={<MetalFabrication/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
