import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar.tsx'
import Home from './Home.tsx'
import Store from './Store.tsx'
import About from './About.tsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
