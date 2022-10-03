import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const buttonStyle={
        background:"rgb(99, 107, 218)",
        color:"white"
    
    }
  return (
    <div>
        
<div class="container-fluid">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <nav class="navbar navbar-dark  justify-content-between" style={{ background:"rgb(99, 107, 218)"}}>
          <a class="navbar-brand"><h2><b>ContactBook</b></h2></a>
           <form class="form-inline">
    
          <button style={buttonStyle} class="btn " type="submit"><h4><Link to='/register'>Register</Link></h4></button>
         </form>
        </nav>
        </div>
    </div>
</div>
    </div>
  )
}

export default Nav