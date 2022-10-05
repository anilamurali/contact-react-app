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
        <nav class="navbar navbar-expand-lg navbar-dark" style={{ background:"rgb(99, 107, 218)"}}>
        <Link class="navbar-brand" to='/'><h3><b>ContactBook</b></h3></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link className='nav-link' style={{color:"white"}}  to='/'><h6>Login</h6></Link>
      </li>
      <li class="nav-item active">
      <Link className='nav-link' style={{color:"white"}}  to='/register'><h6>Register</h6></Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    </div>
</div>
    </div>
  )
}

export default Nav