import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Register = () => {
    const inputStyle={
        width: "80%",
         margin: "auto",
        display: "block",
    }
   
  return (
    <div>
        <Nav/>
        <div class="container">
    <div class="row">
        
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <br/>
                    <form action=""
                    style={{
                    background:"rgb(150, 216, 241)",
                    width:"50%",
                    margin:"auto",
                    height:"100%"}}>
                        <br/>
                        <h3 
                        style={{
                            textAlign:"center",
                            color:"rgb(11, 16, 87)"
                            }}>
                            <b>REGISTER HERE</b></h3><br/>
                        <input style={inputStyle} 
                        type="text" 
                        class="form-control" 
                        placeholder="Enter Your Name" /><br/>

                        <input style={inputStyle} 
                        type="text" 
                        class="form-control" 
                        placeholder="Enter Email"/><br/>

                        <input style={inputStyle} 
                        type="text" 
                        class="form-control" 
                        placeholder="Mobile number"/><br/>

                        <input 
                        style={inputStyle} 
                        type="text" 
                        class="form-control" 
                        placeholder="Password"/><br/>

                        <input 
                        style={inputStyle} 
                        type="text" 
                        class="form-control" 
                        placeholder="Confirm Password"/><br/>

                        <button className='btn btn-primary' 
                        style={{
                            margin:"auto",
                            display:"block"
                        }}>Register</button><br/>

                         <Link to='/'>
                        <p style={{textAlign:"center",color:"rgb(11, 16, 87)"}}>
                                Already have an account?</p></Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Register