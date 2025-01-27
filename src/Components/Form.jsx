import React, { useState } from 'react'
import './style.css'
import { Navigate, useNavigate } from 'react-router-dom'

const Form = () => {
    
    const [form,setForm] = useState({});
    const handleChange =(e)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
        //console.log(JSON.stringify(form));
        
        
    }
    const navigate = useNavigate();
const handleSubmit=async(e)=>{
    e.preventDefault();
   const response = await fetch('http://localhost:8000/form',{
        method :'POST',
        body : JSON.stringify(form),
        headers:{
            'Content-Type':'application/json'
        }

    }
    )
    const data = await response.json();
    //console.log(data);
    navigate('/');
}
  return (
    <div>
      <div class="form-container">
        
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" onChange={handleChange} required/>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" onChange={handleChange} required/>
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number"  onChange={handleChange} required/>
            </div>
            <button type="submit" class="submit-btn">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Form
