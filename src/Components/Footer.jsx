import React from 'react'
import { useState, useEffect } from 'react';


const Footer = () => {

  let [chatChange, setChatChange] = useState(1)
  // console.log(chatChange)

  
  //   setInterval(() => {
  //     if(chatChange===5){
  //       setChatChange(1)
  //       console.log(chatChange)
  //     }else{
  //       // const chatChangeNum = +chatChange
  //       setChatChange(chatChange++)
  //       console.log(chatChange)
  //      }
  //    }, 4000);
   
 

  return (
    <>
    <div  className='footer'>
    <div className='navLinks'>
       <i className="ri-search-line"></i>
       <div className='chatIcon'>
        <i className={"ri-chat-"+chatChange+"-line"}></i> 
       </div>
       <i className="ri-tv-line"></i>
      </div>
     
    </div>
  </>
  )
}

export default Footer