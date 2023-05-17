import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const Login = props => {

  const [allLogin, setAllLogin] = useState('allLogin')
  
  const [user, setUser] = useState({
    email:'',
    password:''
  })
  const{email,password} = user;
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const [passwordType, setPasswordType] = useState('password')

  const showPassword = ()=>{
    if(passwordType==='password'){
      setPasswordType('text')
    }else{
      setPasswordType('password')
    }
  }
  const emailSubmit = (e)=>{
    e.preventDefault()
    if(email === ''){
       setError('input field is empty')
      //  M.toast({html:'input field is empty'})
    }else{
      setLoading(true)
      setTimeout(() => {
        setAllLogin('allLogin2');
      }, 3000);
      setTimeout(() => {
        setLoading(false)
      }, 4000);
    }
  } 

  const passwordSubmit = (e)=>{
    e.preventDefault()
    if(password === ''){
      setError('input field is empty')
   }else{
    setLoading(true)
    setTimeout(() => {
      navigate('/home')
    }, 4000);
   }
  }
  const navigate=useNavigate()

  const onChange = (e)=>{
    setUser({...user, [e.target.name]:e.target.value});
    setError('');
  }

  return (
    <>
      <div className={allLogin}>
        <div className='login'>
          <div>
            <i className="ri-user-line" style={{fontSize:"50px",textAlign:'center',display:'block'}}></i>
            <h1 className='loginHeader'>Login</h1>
            {error&&( <p className='error'> {error}</p> )}
            <p>Email / Username</p>
            <form onSubmit={emailSubmit}>
              <div>
                <input type="email text" disabled={loading} onChange={onChange} value={email} name="email"/>
                {/* <img src="/images/googleIcon.png" style={{position:'absolute',bottom:'00%',left:'0px'}} alt="" /> */}
              </div>
            </form>
            <p style={{textAlign:'center'}}>Or</p>
            <div className='google'>
              <img src="/images/googleIcon.png" alt="" />
              <p>Login with Google</p>
            </div>
            <p>Dont have an account? <Link to={'/signup'} style={{color:'wheat'}}>Sign up</Link></p>
            
          </div>
        </div>
         
        <div className='login'>
          <div >
            {/* <h1 className='loginHeader' style={{fontSize:'15px'}} >{email}</h1> */}
            <div  style={{fontSize:"30px",textAlign:'center',display:'block'}}>
              <i className="ri-key-line"/><i className="ri-lock-line"/>
            </div>
            
            {error&&( <p className='error'> {error}</p> )}
            <p>Password</p>
            <form onSubmit={passwordSubmit} style={{position:'relative'}} >
              <input type={passwordType} disabled={loading} onChange={onChange} value={password} name="password" className={`password${passwordType} `}  />
              <p className='showPassword' onClick={showPassword} >0</p>
            </form>
            <p><Link to={'/signup'} style={{color:'wheat'}}>Forgot password?</Link></p>
            
              
            </div>
        </div>
      </div>
      {loading&&
      (<div className='loading'>
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      </div>)}
    </>
  )
}

Login.propTypes = {}

export default Login