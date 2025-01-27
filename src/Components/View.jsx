import React, { useEffect, useState } from 'react'
import './style.css'
import { Navigate, useNavigate } from 'react-router-dom'
const View = () => {
    const [fdata,setData] = useState([]);
    const getData =async()=>{
        const response =await fetch('http://localhost:8000/getform',{
            method:'GET'

        })
        const data = await response.json();
        setData(data);
    }
    useEffect(()=>{
          getData();
    },[])
const navigate = useNavigate();
const handleClick=()=>{
   navigate('/form');
}
  return (
    <div>
      <div class="container">
      <button class="cta-button" onClick={handleClick}>Add +</button>
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
        {
            fdata.map((user)=>{
              return( <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
               </tr>)
            })
        }
    </table>
    </div>
    </div>
  )
}

export default View
