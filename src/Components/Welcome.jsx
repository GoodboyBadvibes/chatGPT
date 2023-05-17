import React from 'react'
import { useState, useEffect} from 'react';

const Welcome = ({isLoading}) => {

 const [welcome, setWelcome] = useState("")

//  setTimeout(() => {
//     setWelcome('removeWelcome')
//  }, 5000);

useEffect(() => {
  if(isLoading===false){
    setWelcome('removeWelcome')
  }}, [isLoading])


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