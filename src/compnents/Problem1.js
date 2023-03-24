import React,{useState,useEffect} from 'react'
import axios from 'axios'
import UseDebounce from '../helper/UseDebounce'

const api = ``
const Problem1 = () => {
    const [input ,setinput] = useState('')

    const debounceDependency = UseDebounce(input,1000)
    //understanding debouncing
    //below sol if we dont need reusable func
    // useEffect(() => {
    //   let debounce = setTimeout(()=>{
    //         console.log('api calling')
    //         axios.get(api + input)
    //         .then((res)=>{
    //             console.log(res)
    //         }).catch((err)=>{
    //             console.log(err)
    //         })
    //   },1000)
    
    //   return () => {
    //     clearTimeout(debounce)
    //   }
    // }, [input])
    //
    const getData = async() =>{
      try{
       await axios.get(api + input)
                  .then((res)=>{
                      console.log('res api',res)
                  })
      }
      catch(err){
        console.log('err api',err)
       
      }
    }
    //
    useEffect(() => {
      getData()
    }, [debounceDependency])
    
  return (
    <>
        <input 
            name='input custom'
            placeholder='debounce things'
             value={input}
             onChange={e=>setinput(e.target.value)}
        />
    </>
  )
}

export default Problem1