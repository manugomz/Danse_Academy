
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './container/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
