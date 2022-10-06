import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from  'react';
import Nav from './Nav';


const Log=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const login=()=>{
        axios.post("http://localhost:8080/login",{
            email:email,
            password:password,
        })
        .then((response)=>{
            console.log(response);
            if(response.data[0]){
                navigate("/Addcontact");

            }else{
                alert("invalid username")
                navigate("/login");
                window.location.reload(false);

            }
        });
    }
    const inputStyle={
        width: "80%",
         margin: "auto",
        display: "block",
    }
   


    return(
        <div>
            <Nav/><br/>
            <form  style={{
                    background:"rgb(150, 216, 241)",
                    width:"50%",
                    margin:"auto",
                    height:"100%"}} >
                        <br/>
<div class="container">
    <div class="row">
        <div class="col col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-2">
                <div class="col -lg-12 col-xl-12 col-xxl-12">
                   
                   <h1 style={{
                            textAlign:"center",
                            color:"rgb(11, 16, 87)"
                            }}><b>LOGIN HERE</b></h1><br/>
                    <input type="text" placeholder='Email' value={email} style={inputStyle}  onChange={(event)=>{setEmail(event.target.value)}} class="form-control"/>
                    <br/>
                </div>
                <div class="col col-lg-12 col-xl-12 col-xxl-12">
                    
                    <input type="text" placeholder='Password' value={password} style={inputStyle}  onChange={(event)=>{setPassword(event.target.value)}}  class="form-control"/>
                    <br/>
                </div>
                
               
                <div class="col col-lg-12 col-xl-12 col-xxl-12">
              
                <button type="button" style={{margin:"auto",display:"block"}} onClick={login} class="btn btn-primary">Login</button>
                <br/>

                </div>
            </div>
        </div>
    </div>
</div>
</form>



        </div>
    )
}
export default Log;