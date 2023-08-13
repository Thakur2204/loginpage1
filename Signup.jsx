import React, { useState} from "react"

export const Signup=() =>{
  
    const [email, setEmail]= useState('');
    const [pass, setPass]= useState('');
    const [fullname , setfullName]= useState('');
    const hadleSubmit =(e) =>{
        e.preventDefault();
        console.log(email);
    }

    return (
      

        <>
        <form>
        <label htmlFor="name">Name</label>
           <input value={fullname} onChange={(e) => setfullName(e.target.value)} type="fullname" placeholder="your name" id="fullname" name="fullname" /> 
            <label htmlFor="email">E-mail</label>
           <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" /> 
           <label htmlFor="password">Password</label>
           <input value={pass}  onChange={(e) => setPass(e.target.value)}  type="password" placeholder="********"  id="password" name="password" /> 
           <button type="submit"></button>

        </form>
        <button>Already Have an account? Log In</button>
        </>
    
    
    )
        
    
}
