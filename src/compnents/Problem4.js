import React,{useState,useEffect} from 'react'
import UseThrottle from '../helper/UseThrottle'
import UseDebounce from '../helper/UseDebounce'
import Resize from '../helper/Resize'
const Problem4 = () => {
  

  const [width, setwidth] = useState(window.innerWidth)
  const [awidth,setawidth] = useState(window.innerWidth)
  // const [data,setdata] = useState(window.innerWidth) 
  //
  // const data = UseThrottle(width,500)

  //
// one way
  // const throttle = (fn,delay)=>{
  //   console.log('window innerwidth  ',`${window.innerWidth}`)
  //   let run = false
  //   return function (...args) {
  //     if (!run) {
  //       fn(...args)
  //       run = true
  //       setTimeout( () => run = false, delay)
  //     }
  //   }
  // }
  
  //   window.addEventListener('resize',throttle(resizeBrowser,5000))
  
  const resizeBrowser = () =>{
    console.log('resize browser')
    setwidth(window.innerWidth) 
    // setdata(window.innerWidth)

  }
  const data = UseThrottle(resizeBrowser,1000)
 
  // const data2 = Resize()
//  setawidth(window.innerWidth)
 
 
   
  return (
  <>
    <div>width of browswe  usethrottle{data}</div>
    {/* <div>width of browswe  usedebounce{data1}</div> */}
    {/* <div>width of browswer w/o any throttling n debouncing {data2}</div> */}
  </>

  )
}

export default Problem4