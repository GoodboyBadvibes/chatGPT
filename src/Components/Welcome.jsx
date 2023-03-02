import React from 'react'
import { useState } from 'react';

const Welcome = () => {

 const [welcome, setWelcome] = useState("")

 setTimeout(() => {
    setWelcome('removeWelcome')
 }, 5000);

  return (
    <>
      <div className={'welcome '+ welcome}>
        <div>
          <h1><i className="ri-twitter-line"></i></h1>
          <h1>ChatGPT</h1>
        </div>
        
      </div>
   </>
  )
}

export default Welcome