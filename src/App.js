import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Addcontact from './Components/Addcontact';
import Viewcontact from './Components/Viewcontact';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route/>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/Addcontact' element={<Addcontact/>}/>
        <Route path='/Viewcontact' element={<Viewcontact/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
