import React, { useState } from 'react'
import "./Login.css"

function Login() {
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submitForm=(e)=>{
    e.preventDefault();
    const newEntry={email:email,password:password};
    setAllEntry([...allEntry,newEntry]);
    console.log(allEntry);
  }
  return (
    <>
     <form action=""onSubmit={submitForm}>
      <h1>LoginForm</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name='email' id='email' placeholder='example@gmail.com' autoComplete='off' 
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' placeholder='*****' autoComplete='off'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <button type='submit'>Login</button>
     </form>
     
    </>
  )
}

export default Login