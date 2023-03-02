import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Login from '../Pages/login'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [navMenu, setNavMenu] = useState(false)

  const openNavMenu = () =>{
    if (navMenu === false) {
      setNavMenu(true)
    }else{
      setNavMenu(false)
    }
  }

  const navigate = useNavigate()
  const logout=()=>{
    navigate('/login')
  }
  return (
    <>
     <div className='nav'>
      <div>
       <h2>ChatGpt</h2>
      </div>
      <div className='navLinks'>
       <i  className="ri-profile-line"></i>
       <div>
         <i  className="ri-notification-3-line"></i>
         {navMenu&&(
          <div className='notificationMenu'>
           <p onClick={logout}>Log out</p>
           <p>Go premium</p>
           <p>About</p>
         </div> 
         )}
       </div>
       <i  className="ri-more-2-fill" style={{}}  onClick={()=>{openNavMenu()}}></i>
      </div>
     </div>
    </>
  )
}

export default Navbar