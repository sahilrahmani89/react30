import React,{useEffect,useState} from 'react'

const Resize = () => {
    const [width, setwidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize',handleResize)

  
    return () => {
     window.removeEventListener('resize',handleResize)
    }
  }, [])

  const handleResize = () =>{
        setwidth(window.innerWidth)
  }
  
  return width
 
}

export default Resize