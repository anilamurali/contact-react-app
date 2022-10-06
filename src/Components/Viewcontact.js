import axios from 'axios';
import React, { useState } from 'react'
import Navbar from './Navbar';

const Viewcontact = () => {
    const [view,setView]=useState([])
    axios.get("http://localhost:8080/viewcontact").then((response) => {
          //console.log("response");
          setView(response.data);
        });

  return (
    <div>
      <Navbar/>
      <br/>
      <div class="container">
    <div class="row">
        <div class="col col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-2">

                 {
                        view.map((value,key)=>{
                       return <div class='col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3'>
                          
                         <div class="card" style={{background:"rgb(165, 169, 212)"}}>
                         <div class="card-header">
                          <h3 style={{color:"rgb(7, 12, 65)"}}><b>{value.name}</b></h3>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title" style={{color:"rgb(7, 12, 65)"}}>Email: {value.email}</h5>
                        <p class="card-text" style={{color:"rgb(7, 12, 65)"}}>Location: {value.location}</p>
                        <p class="card-text" style={{color:"rgb(7, 12, 65)"}}>Contact: {value.number}</p>
                        <p class="card-text" style={{color:"rgb(7, 12, 65)"}}>Alternative Contact: {value.alnumber}</p>
                        <a href="#" class="btn btn-primary">Update</a><span>    </span>
                        <a href="#" class="btn btn-primary">Delete</a>
                         </div>
                        </div>
                   </div>
                        })}
            
        </div>
    </div>
</div>
</div>
      </div>
  )
}

export default Viewcontact