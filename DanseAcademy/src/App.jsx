
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './container/Home'
import Header from './container/Header'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
