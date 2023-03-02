import React from 'react'
import Ad from './Ad'
import Gossips from './Gossips'
import Meme from './Meme'
import Welcome from './Welcome'
 

const Body = () => {
  return (
   <>
     <div className='body'>
      <Welcome/>
      <Gossips/>
      <Ad/>
      <Meme/>
      
     </div>
   </>
  )
}

export default Body