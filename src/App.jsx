import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './componantes/Navbar'
import Home from './Routes/Home.route'
function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
