import React from 'react'


const Gossip = ({gossip}) => {
   
  return (
    <>
     <div className='gossip'>
       <img className='gossipImage' src={gossip.img} alt="img" />
      <div className='gossipStory'>
       <p>{gossip.title}</p>
      </div>
     </div>
   </>
  )
}

export default Gossip