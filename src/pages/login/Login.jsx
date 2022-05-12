import React, { useState } from 'react'

const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    
    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
      };
    

  return (
    <div>
      <input type="text"
        placeholder='username'
        onChange={(e) => setUsername(e.target.value)}
        />

      <input type="password" 
        placeholder='password' 
        onChange={(e) => setPassword(e.target.value)}
        />
      <button onClick={handleClick} style={{ padding: 10, width:100 }}>
        Login
      </button>
    </div>
  )
}

export default Login
