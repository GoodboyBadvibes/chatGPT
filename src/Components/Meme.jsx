import React from 'react'
import {useState} from 'react'

const Meme = () => {
  const [memeOfTheDay, setmemeOfTheDay] = useState("")

  const [count, setcount] = useState(0)
if (count===0) {
  setcount(1)
  setTimeout(() => {
    setmemeOfTheDay("memeTransition")
  }, 8000);
}
  
  // clearTimeout()    

  setTimeout(() => {
    setmemeOfTheDay("")
  }, 9000);
  clearTimeout();

  
  

    // setInterval(() => {
      
    // }, interval);
  

  return (
    <>
    <h1 className={'memeOfTheDay '+ memeOfTheDay}>Meme of The Day</h1>
    <div className='memeDiv'>
    
     <img className='memeImg' src='./images/meme1.jpg' alt='memeImg'/>
    </div>
      
  </>
  )
}

export default Meme