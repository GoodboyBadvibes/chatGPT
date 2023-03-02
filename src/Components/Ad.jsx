import React from 'react'
import { useState } from 'react'

const Ad = () => {

 const [ad,setAd]= useState("adNone")

 setTimeout(() => {
  setAd("adDis")
 }, 9000)

 setTimeout(() => {
  console.log(ad)
 }, 3000);

 console.log(ad)

 return (
   <>
    <div className={ad +' adDiv'}>
     <img src="/images/adImage.jpg" className='adImage' alt="" />
     {console.log(ad)}
    </div>
  </>
  )
}

export default Ad