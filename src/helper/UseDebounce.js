import React,{useState,useEffect} from 'react'

const UseDebounce = (searchTerm,time) => {
    const[debounceValue,setdebounceValue] = useState(searchTerm)

    useEffect(() => {
      const timer = setTimeout(() => {
       
        setdebounceValue(searchTerm)
      }, time);
    
      return () => {
        
        clearTimeout(timer)
      }
    }, [searchTerm,time])
    
  
    return debounceValue
  
}

export default UseDebounce