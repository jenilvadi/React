// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Style.css'
export default function Form() {
    const [form, setForm] = useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        setForm('none')
        };
  return (
    <>
    <br/><br/>
    <form id='form1' style={{display:form}} onSubmit={(e)=>handleSubmit(e)}>
    <br/>
    <h1 style={{textAlign:"center",color:"White"}}>Seller Detail</h1>
    <br/>
    <label style={{fontSize:"25px","marginLeft":"16%"}}>Name:</label><br/>
    <input type='text' placeholder='Enter Name' required />
    <br/><br/>
    <label style={{fontSize:"25px","marginLeft":"16%"}}>Contact No:</label><br/>
    <input type='tel' placeholder='Enter Mobile No.' required />
    <br/><br/>
    <label style={{fontSize:"25px","marginLeft":"16%"}}>Email:</label><br/>
    <input type='email' placeholder='Enter Email Address' required />
    <br/><br/>
    <label style={{fontSize:"25px","marginLeft":"16%"}}>GST NO:</label><br/>
    <input type='text' placeholder='Enter GST No' required />
    <br/><br/><br/>
    <button id='btn-1'><a href="Product.jsx" style={{textDecoration:"none",fontSize:"20px",color:"red"}}/>Submit</button>
    </form>
    <br/><br/><br/>
    </>
  )
}
