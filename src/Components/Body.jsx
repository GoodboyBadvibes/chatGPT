import React from 'react'
import Ad from './Ad'
import Gossips from './Gossips'
import Meme from './Meme'
import Welcome from './Welcome'
import { useState } from 'react'
 

const Body = ({isLoading}) => {

  console.log(isLoading)

  return (
   <>
     <div className='body'>
      <Welcome isLoading={isLoading}/>
      <Gossips/>
      <Ad isLoading={isLoading}/>
      <Meme isLoading={isLoading}/>
      
     </div>
   </>
  )
}

export default Body