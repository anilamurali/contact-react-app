import axios from 'axios';
import React, { useState } from 'react';
import Navbar from './Navbar';

const Addcontact = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [location,setLocation]=useState("");
    const [number,setNumber]=useState("");
    const [alnumber,setAlternative]=useState("");
    const addEvent=()=>{
        var data={
            name:name,
            email:email,
            location:location,
            number:number,
            alnumber:alnumber,
        }
        axios.post("http://localhost:8080/addcontact",data).then((response)=>{
            console.log("success")
            if(response.data.status=="success")
            {
                alert("Successfully Added");
                
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
        <Navbar/>
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
                        <br/>
                        <input style={inputStyle} 
                        type="text" 
                        class="form-control" 
                        onChange={(e)=>{setName(e.target.value)}}
                        placeholder="Enter Name" /><br/>

                        <input style={inputStyle} 
                        type="text" 
                        class="form-control"
                        onChange={(e)=>{setEmail(e.target.value)}} 
                        placeholder="Email"/><br/>

                        <input 
                        style={inputStyle} 
                        type="text" 
                        class="form-control" 
                        onChange={(e)=>{setLocation(e.target.value)}}
                        placeholder="Location"/><br/>

                        <input style={inputStyle} 
                        type="text" 
                        class="form-control"
                        onChange={(e)=>{setNumber(e.target.value)}} 
                        placeholder="Mobile number"/><br/>

                        <input 
                        style={inputStyle} 
                        type="text" 
                        class="form-control" 
                        onChange={(e)=>{setAlternative(e.target.value)}}
                        placeholder="Alternative Number"/><br/>

                        <button className='btn btn-primary' 
                        style={{
                            margin:"auto",
                            display:"block"
                        }} onClick={addEvent}>Submit</button><br/>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Addcontact