import React,{useState,useEffect} from 'react'
import axios from 'axios'

const api = ``
const Problem1 = () => {
    const [input ,setinput] = useState('')
    //understanding debouncing
    useEffect(() => {
      let debounce = setTimeout(()=>{
            axios.get(api + input)
            .then((res)=>{
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            })
      },1000)
    
      return () => {
        clearTimeout(debounce)
      }
    }, [input])
    
  return (
    <>
        <input 
            name='input custom'
             value={input}
             onChange={e=>setinput(e.target.value)}
        />
    </>
  )
}

export default Problem1