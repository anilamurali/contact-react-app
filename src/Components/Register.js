import axios from "axios";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';


const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [password,setPassword]=useState("");
    const [cpass,setCpass]=useState("");
    const navigate = useNavigate();
    const registerHere=()=>{
        var data={
            name:name,
            email:email,
            mobile:mobile,
            password:password,
            cpass:cpass,
        }
        axios.post("http://localhost:8080/register",data).then((response)=>{
            console.log("success")
            if(response.data.status=="success")
            {
                alert("Successfully Registered");
                
            }
            else
            {
                alert("Something went wrong")
            }
            
            
        })
    }



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
                    height:"100%"}}
                    >
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
                        onChange={(e)=>{setName(e.target.value)}}
                        placeholder="Enter Your Name" 
                        /><br/>

                        <input style={inputStyle} 
                        type="text" 
                        class="form-control" 
                        placeholder="Enter Email"
                        onChange={(e)=>{setEmail(e.target.value)}}/><br/>

                        <input style={inputStyle} 
                        type="text" 
                        class="form-control" 
                        placeholder="Mobile number"
                        onChange={(e)=>{setMobile(e.target.value)}}/><br/>

                        <input 
                        style={inputStyle} 
                        type="text" 
                        class="form-control" 
                        placeholder="Password"
                        onChange={(e)=>{setPassword(e.target.value)}}/><br/>

                        <input 
                        style={inputStyle} 
                        type="text" 
                        class="form-control" 
                        placeholder="Confirm Password"
                        onChange={(e)=>{setCpass(e.target.value)}}/><br/>

                        <button className='btn btn-primary' 
                        style={{margin:"auto",display:"block"}}
                        onClick={registerHere}
                        >Register</button><br/>

                         
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