
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css'
import Adminlogin from '../Admin/Adminlogin'
import Content from '../Content/Content'
import Addcontent from '../AddContent/Adcontent'


function App() {
  

  return (<BrowserRouter>
   { 
 <Routes>
 <Route path="/"  element={<Content/>}/>
  <Route path="/9407800"  element={<Adminlogin/>}/>
 <Route path='/9407800/add' element ={<Addcontent/>}/>
 </Routes>
}

    </BrowserRouter>
  )
}

export default App
