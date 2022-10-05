import React from 'react';
import Navbar from './Navbar';

const Addcontact = () => {
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
                        placeholder="Enter Name" /><br/>

                        <input style={inputStyle} 
                        type="text" 
                        class="form-control" 
                        placeholder="Email"/><br/>

                        <input 
                        style={inputStyle} 
                        type="text" 
                        class="form-control" 
                        placeholder="Location"/><br/>

                        <input style={inputStyle} 
                        type="text" 
                        class="form-control" 
                        placeholder="Mobile number"/><br/>

                        <input 
                        style={inputStyle} 
                        type="text" 
                        class="form-control" 
                        placeholder="Alternative Number"/><br/>

                        <button className='btn btn-primary' 
                        style={{
                            margin:"auto",
                            display:"block"
                        }}>Submit</button><br/>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Addcontact