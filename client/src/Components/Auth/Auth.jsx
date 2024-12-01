import React,{useState} from 'react'
import Login from './Login'
import SignUp from './SignUp'
import './Auth.css'
const Auth = () => {
  const [registered,setregistered]= useState(true)
  return (
    <div className='AuthPage'>
      <div>
        {
          registered?
          <Login/>:
          <SignUp/>
        }
      </div>
      <div onClick={() => { setregistered(prev => !prev); }} style={{ cursor: 'pointer' }}>
  {registered ? "Need To sign up" : "Already register →"}
</div>
    </div>
  )
}

export default Auth
