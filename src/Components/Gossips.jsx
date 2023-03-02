import React from 'react'
import Gossip from './Gossip'

const Gossips = () => {

  let gossips = [
    {
      img : '/images/gossipImage.jpg',
      title : 'the title of gossip, juicy stories and secrets worth leaking will enter here'
    },
    {
      img : '/images/gossipImage.jpg',
      title : 'the title of gossip, juicy stories and secrets worth leaking will enter here'
    }, 
    {
      img : '/images/gossipImage.jpg',
      title : 'the title of gossip, juicy stories and secrets worth leaking will enter here'
    }, 
    {
      img : '/images/gossipImage.jpg',
      title : 'the title of gossip, juicy stories and secrets worth leaking will enter here'
    }, 
    {
      img : '/images/gossipImage.jpg',
      title : 'the title of gossip, juicy stories and secrets worth leaking will enter here'
    }, 
    {
      img : '/images/gossipImage.jpg',
      title : 'the title of gossip, juicy stories and secrets worth leaking will enter here'
    }, 
    {
      img : '/images/gossipImage.jpg',
      title : 'the title of gossip, juicy stories and secrets worth leaking will enter here'
    }, 
    {
      img : '/images/gossipImage.jpg',
      title : 'the title of gossip, juicy stories and secrets worth leaking will enter here'
    },
    {
      img : '/images/gossipImage.jpg',
      title : 'the title of gossip, juicy stories and secrets worth leaking will enter here'
    }
   ]
  return (
    <>
    <div className='gossips'>
      {gossips.map( (gossip,index) => (
       
         <Gossip gossip={gossip} key={index}/>
      
      ))}
      
     
    </div>
  </>
  )
}

export default Gossips