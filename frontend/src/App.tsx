import './App.css'
// import Form from './components/Form'
import RegisterForm from './components/RegisterForm'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Form from './components/Form'
import Home from './components/Home'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Form/>}/>
      <Route path='/register' element={<RegisterForm/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
