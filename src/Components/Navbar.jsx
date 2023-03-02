import React from 'react'
import { useState } from 'react'

const Navbar = () => {

  const [navMenu, setNavMenu] = useState(false)

  const openNavMenu = () =>{
    if (navMenu === false) {
      setNavMenu(true)
    }else{
      setNavMenu(false)
    }
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
           <p>Log out</p>
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