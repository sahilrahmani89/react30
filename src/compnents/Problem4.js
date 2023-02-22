import React,{useState,useEffect} from 'react'

const Problem4 = () => {
  

  const [width, setwidth] = useState('')

  const resizeBrowser = () =>{
    console.log('resize browser')
    setwidth(window.innerWidth)
  }

  const throttle = (fn,delay)=>{
    console.log('window innerwidth  ',`${window.innerWidth}`)
    let run = false
    return function (...args) {
      if (!run) {
        fn(...args)
        run = true
        setTimeout( () => run = false, delay)
      }
    }
  }
  
    window.addEventListener('resize',throttle(resizeBrowser,5000))
    
   
 
  
  return (
    <div>width of browswe {width}</div>
  )
}

export default Problem4