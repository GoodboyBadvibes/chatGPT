import React from 'react'
import { useState, useRef } from 'react'
// import { Navigate } from 'react-router-dom'
// import Login from '../Pages/login'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navMenuRef = useRef(null)
  const [navMenu, setNavMenu] = useState(false)

  const openNavMenu = () =>{
      setNavMenu(!navMenu)
  }

  const closeNavMenu = (e) =>{
    if(navMenuRef.current && navMenu && !navMenuRef.current.contains(e.target) )
    {
      setNavMenu(false)
    }
}

const moreList = document.getElementsByClassName('notificationMenu')
document.addEventListener('mousedown', closeNavMenu)
// document.addEventListener('mousedown', (e)=>{
//   if(e.target.className !== "ri-more-2-fill" || e.target.className !== 'notificationMenu'){
//     if(navMenu=== true){
//       setNavMenu(false)
//     }
//   }
// })

  const navigate = useNavigate()
  const logout=()=>{
    navigate('/')
  }
  return (
    <>
     <div  className='nav'>
      <div>
       <h2>ChatGpt</h2>
      </div>
      <div ref={navMenuRef} className='navLinks'>
       <i  className="ri-profile-line"></i>
       <div>
         <i  className="ri-notification-3-line"></i>
         {navMenu&&(
          <div  className='notificationMenu'>
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