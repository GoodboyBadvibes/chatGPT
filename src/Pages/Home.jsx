import React,{useState, useEffect, useLayoutEffect} from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Components/Navbar'
import Body from '../Components/Body'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'

const Home = props => {

  const [isLoading, setIsLoading] = useState(true)
  console.log(isLoading)

  useEffect(() => {

    // console.log(isLoading)
    // console.log(window)

    
      // window.onpageshow= ()=>{
        // console.log(document.readyState)
        // setIsLoading(false)
        // console.log(isLoading)
      // }
   

    // window.addEventListener("load",()=>{
    //   setIsLoading(false)
    //   console.log(isLoading)
    // })

    // document.onreadystatechange = () => {
    //    if (document.readyState ==='complete'){
    //     setIsLoading(false)
    //    }
    // }

       if (document.readyState ==='complete'){
        setIsLoading(false)
       }else{
        window.addEventListener('load',()=>{
          setIsLoading(false)
        })
        return ()=>{
          window.removeEventListener('load',()=>{
            setIsLoading(false)})
        }
       }
    

    console.log(isLoading)
  }, [isLoading])
  
console.log(document.readyState)
  return (
    <>
      <div>
        <Navbar/>
        <Body isLoading={isLoading}/>
        <Footer/>   
      </div>
    </>
  )
}

Home.propTypes = {}

export default Home