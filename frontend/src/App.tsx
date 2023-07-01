import './App.css'
// import Form from './components/Form'
import RegisterForm from './components/RegisterForm'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Form from './components/Form'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/login' element={<Form/>}/>
      <Route path='/register' element={<RegisterForm/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
