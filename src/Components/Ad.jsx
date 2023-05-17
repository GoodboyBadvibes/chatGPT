import React from 'react'
import { useState, useEffect } from 'react'


const Ad = ({isLoading}) => {

 const [ad,setAd]= useState("adNone")

useEffect(() => {
  if(isLoading===false){
    setTimeout(() => {
      setAd("adDis")
     }, 5000)     
  }}, [isLoading])
  console.log(isLoading)

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