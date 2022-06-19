import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './pages/About'
import Books from './pages/Books'
import Characters from './pages/Characters'
import Home from './pages/Home'
import Movies from './pages/Movies'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/books' element={<Books/>} />
            <Route path='/movies' element={<Movies/>} />
            <Route path='/characters' element={<Characters/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/notfound' element={<NotFound/>} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App