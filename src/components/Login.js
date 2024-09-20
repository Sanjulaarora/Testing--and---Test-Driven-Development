import React from 'react';
import { useState } from 'react';

const Login = () => {
    const [error, setError] = useState(false);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div>
        <form>
            <input type="text" placeholder='username' value={user} onChange={(e) => setUser(e.target.value)}/>
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button disabled={ !user || !password }>Login</button>
            <span 
              data-testid="error"
              style={{ visibility: error ? "visible" : "hidden" }}
            >
              something went wrong!
            </span>
        </form>
    </div>
  )
}

export default Login;