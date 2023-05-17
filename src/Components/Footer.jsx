import React from 'react'
import { useState, useEffect } from 'react';


const Footer = () => {

  let [chatChange, setChatChange] = useState(1)
  const [chatNotice, setchatNotice] = useState(false)
  const [chatNoticeClass, setchatNoticeClass] = useState("chatNotice")
  let check = 0;
  
 const chatNoticeTimeout=()=> {setTimeout(() => {
  if(check===0){
    check++ 
    setchatNotice(true)
    console.log(check)
    clearTimeout(chatNoticeTimeout)
  }else{

  }
  }, 10000);}
  chatNoticeTimeout()
  clearTimeout(chatNoticeTimeout)
  setTimeout(() => {
    setchatNoticeClass("chatNoticeTrans")
  }, 10050);
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
          <div className='chatIcon' onClick={()=>{setchatNotice(false); setchatNoticeClass("")}}>
            <i className={"ri-chat-"+chatChange+"-line"}></i> 
          </div>
          <i className="ri-tv-line"></i>
        </div>
          {chatNotice&&(
          <div className={chatNoticeClass}>
          <p>Chat with an AI <br />Click on the chat icon to get started <button onClick={()=>{setchatNotice(false); setchatNoticeClass("")}} style={{border:"none",padding:"0.5px 2px", borderRadius:"10px", color:"black"}}>ok</button></p>
          </div>
          )}
      </div>
  </>
  )
}

export default Footer