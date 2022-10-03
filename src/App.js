import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
