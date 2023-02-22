import React,{useEffect,useState} from 'react'
import { getData } from '../helper/helper'

const api = ``

const Problem2 = () => {
  const [helpData,sethelpData] = useState()
    const fetchData = async()=>{
        let data = await getData(api)
       console.log(data)
       sethelpData(data)
    }

    useEffect(() => {
      fetchData()
    }, [])
    
  return (
    <div>'helper status':{helpData && helpData.status}</div>
  )
}

export default Problem2