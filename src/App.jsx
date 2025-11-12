import './App.css'
import Buz from './components/Buz.jsx'
import CarDetails from './components/CarDetails.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<h1>Home Page</h1>} /> */}
        <Route path="/" element={<Buz />} />
        <Route path="/cars/:id" element={<CarDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
