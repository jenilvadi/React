// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
export default function Product() {
  const [name1,setName1]=useState("")
  const [name2,setName2]=useState("")
  const [num,setNum]=useState("")
  const [email,setEmail]=useState("")
  const [name1Err,setName1Err]=useState("")
  const [name2Err,setName2Err]=useState("")
  const [numErr,setNumErr]=useState("")
  const [emailErr,setEmailErr]=useState("")
  const [category,setCategory]=useState("")
  const [category2,setCategory2]=useState("")
  const [category3,setCategory3]=useState("")
  const handleSubmit = (e) =>{
  e.preventDefault()
    if(!name1 && !name2 && !num && !email && !category ){
      if(!name1){
        console.log("Name Required");
        setName1Err("*F.Name Required");
    }else{
        setName1Err("");
    }
    if(!name2){
        console.log("Name Required");
        setName2Err("*L.Name Required");
    }else{
        setName2Err("");
    }
    if(!num){
        console.log("Number Required");
        setNumErr("*Number Required");
    }else{
        setNumErr("");
    }
    if(!email){
        console.log("Email Required");
        setEmailErr("*Email Required");
    }else if (!email.includes("@")){
        setEmailErr("Email is Invalid")
    }else{
        setEmailErr("");
    }
    }else{
      setEmailErr("") || setName1Err("") || setName2Err("") || setNumErr("")
      alert("Form Submitted Successfully")
  alert(` Name is: ${name1} ${name2} \n Email is: ${email} \n Number is: ${num}`);
}
} 
  return (
    <>
    <form id='form2' onSubmit={(e)=>handleSubmit(e)}>
    <br/>
    <h1 style={{textAlign:"center"}}>Customer Detail</h1>
    <br/>
    <input type="text" placeholder="First Name" onChange={(e)=>setName1(e.target.value)}/><br/>
    <p style={{color:"red"}}>{name1Err}</p>
    <input type="text" placeholder="Last Name" onChange={(e)=>setName2(e.target.value)}/><br/>
    <p style={{color:"red"}}>{name2Err}</p>
    <input type="text" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}/> <br/>
    <p style={{color:"red"}} id='p3'>{emailErr}</p>
    <input type="tel" placeholder="Mobile Number" onChange={(e)=>setNum(e.target.value)}/><br/>
    <p style={{color:"red"}} id='p4'>{ numErr}</p>
    <select id="select1" required onChange={(e)=>setCategory(e.target.value)}>
    <option  >---Select Items---</option>
    <option value="Mobile">Mobile</option>
    <option value="Electronic">Electronic</option>
    <option value="Vehicle">Vehicle</option>
    <option value="Food">Food</option>
    <option value="Cloths">Cloths</option>
    </select>
  {
      category == "Mobile" &&
      <select id='select1'onChange={(e)=>setCategory2(e.target.value)} >
        <option>--- Select Brand ---</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Vivo">Vivo</option>
        </select>  
    }
    {      
        category2 =="Vivo" && 
        <select id='select1'>
        <option>--- Select Model ---</option>
        <option value="14">X100 ULTRA</option>
        <option value="13">X FOLD 3 Pro </option>
        <option value="15">V40</option>
      </select>
    }
    {      
        category2 =="Vivo" &&  
        <select id='select1'>
        <option>--- Price ---</option>
        <option value="14">1,00,000</option>
        <option value="13">80,000</option>
        <option value="15">1,45,000</option>
      </select>
    } 
    {      
        category2 =="Samsung" &&  
        <select id='select1'>
        <option>--- Select Model ---</option>
        <option value="15">S24</option>
        <option value="14">Z-flip</option>
        <option value="13">Z-fold</option>
      </select>
    }
    {      
        category2 =="Samsung" &&  
        <select id='select1'>
        <option>--- Select Price ---</option>
        <option value="14">1,20,000</option>
        <option value="13">90,000</option>
        <option value="15">1,50,000</option>
      </select>
    }
    {    
        category2 =="Apple" &&  
       <select id='select1'>
        <option>--- Select Model ---</option>
        <option value="13">iPhone 13</option>
        <option value="14">iPhone 14</option>
        <option value="15">iPhone 15</option>
      </select>
    }
    {      
        category2 =="Apple" &&  
        <select id='select1'>
        <option>--- Select Price ---</option>
        <option value="14">74,000</option>
        <option value="13">56,000</option>
        <option value="15">1,20,000</option>
      </select>
    }   
    {
      category =="Electronic" &&   
      <select id='select1'  onChange={(e)=>setCategory3(e.target.value)}>
        <option>--- Select Item ---</option>
        <option value="T.V">T.V</option>
        <option value="Fridge">Fridge</option>
        <option value="Machine">Washing Machine</option>
        </select>
    } 
    {
      category3 =="Fridge" &&  
      <select id='select1'>
        <option>1-Door</option>
        <option>2-Door</option>
      </select>
    } 
    {
      category3 =="T.V" &&  
      <select id='select1'>
      <option>--Size--</option>
        <option>41 inch</option>
        <option>52-inch</option>
        <option>99 inch</option>
      </select>
    } 
    {
      category3 =="Machine" &&  
      <select id='select1'>
      <option>--Door--</option>
        <option>upper</option>
        <option>front</option>
      </select>
    } 
    {
      category =="Electronic" &&   
      <input type='date' value={"Enter Replace Date"} placeholder='Enter Replace Date ' />
    } 
    {
      category =="Vehicle" &&   
      <select id='select1'>
        <option>--- Select Vehicle Type ---</option>
        <option value="14">2 Wheel</option>
        <option value="13">4 Wheel</option>
        </select>
    } 
    {
      category =="Vehicle" &&   
      <input type='text' placeholder='Enter Model' />
    } 
    {
      category =="Vehicle" &&   
        <select id='select1'>
        <option>--- Select Fuel Type ---</option>
        <option value="14">Petrol</option>
        <option value="13">Desial</option>
        <option value="13">CNG</option>
        </select>
    } 
    {
      category == "Food" &&
      <select id='select1'>
        <option>--- Select Type ---</option>
        <option value="Apple">Gujarati</option>
        <option value="Samsung">Punjabi</option>
        <option value="Samsung">South Indian</option>
        <option value="Samsung">Chines</option>
        <option value="Samsung">Italian</option>
        </select>  
    }
    {
      category =="Food" &&   
      <input type='text' placeholder='Enter Food Name ' />
    } 
    { 
      category =="Food" &&   
      <input type='number' placeholder='Enter Plate No' />
    } 
    {
      category == "Cloths" &&
      <select id='select1'>
        <option>--- Select Type ---</option>
        <option>Pant</option>
        <option>Shirt</option>
        <option>T-Shirt</option>
        </select>  
    }
    {
      category =="Cloths" &&   
      <input type='text' placeholder='Enter Size ' />
    } 
    { 
      category =="Cloths" &&   
      <input type='text' placeholder='Enter Color' />
    } 
    <br/><br/><br/>
    <button type='Submit' id='bt-2'>Submit</button>      
    </form>
    <br/>
    </>
  )
}
