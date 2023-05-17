import React from 'react'
import {useState, useEffect} from 'react'

const Meme = ({isLoading}) => {
  const [memeOfTheDay, setmemeOfTheDay] = useState("")

  const [count, setcount] = useState(0)



  const [isFlipped, setIsFlipped] = useState(false);
  const [frontContent, setFrontContent] = useState(['./images/meme1.jpg', './images/meme3.jpg', './images/meme5.jpg', './images/meme7.jpg','./images/meme9.jpg']);
  const [backContent, setBackContent] = useState(['./images/meme2.jpg', './images/meme4.jpg', './images/meme6.jpg', './images/meme8.jpg','./images/meme10.jpg']);


  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped){
        setFrontContent((prevContent) => {
        const newContent = [...prevContent];
        newContent.push(newContent.shift());
        return newContent;
      })}
    else{
      setBackContent((prevContent) => {
        const newContent = [...prevContent];
        newContent.push(newContent.shift());
        return newContent;
      });
    }

  }




useEffect(() => {
 if(isLoading===false){
  if (count===0) {
    setcount(1)
    setTimeout(() => {
      setmemeOfTheDay("memeTransition")
    }, 4000);
  }
    
    // clearTimeout()    
  
    setTimeout(() => {
      setmemeOfTheDay("")
    }, 5000);
    clearTimeout();
  
 }
}, [isLoading])

  
  

    // setInterval(() => {
      
    // }, interval);
  

  return (
    <>
    <h1 className={'memeOfTheDay '+ memeOfTheDay}>Meme of The Day</h1>
    <div className={`memeDiv ${isFlipped ? 'is-flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {/* Front Content */}
          <img className='memeImg' src={frontContent[0]} alt='memeImg'/>
        </div>
        <div className="flip-card-back">
          {/* Back Content */}
          <img className='memeImg' src={backContent[0]} alt='memeImg'/>
        </div>
      </div>
    </div>
    {/* <div className='memeDiv'>
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img className='memeImg' src='./images/meme1.jpg' alt='memeImg'/>
        </div>
        <div class="flip-card-back">
          <img className='memeImg' src='./images/meme2.jpg' alt='memeImg'/>
        </div>
      </div>
    </div>    */}
  </>
  )
}

export default Meme