import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import './Login.css';

function Login() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const signIn = (e) => {
    e.preventDefault()
    console.log("the sign in function run")
  }

  const signUp = (e) => {
    e.preventDefault()
    console.log("the sign up function ran")
  }
  return (
    <div className="login">        
        <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
        </Link>
        <div className="login__container">
            <h1>Sign In</h1>
            <form action="" method="post">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                <button className="login__signInBtn" type="submit" onClick={signIn}>Sign In </button>
                <p>By signing-in you agree to the AMAZON FAKE CLONE conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest Based Ads Notice.</p>

                <button type="submit" className="login__signUpBtn" onClick={signUp} >Create Your Amazon Account</button>
            </form>
        </div>
    </div>
  )
}

export default Login