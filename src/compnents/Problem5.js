import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { getData } from '../helper/helper'


const Problem5 = (something,Comp,api) => {
    // hoc
    return function HOC(){

        const [user,setuser] = useState([])

    const getUser = async() =>{
        // console.log('api',api)
        let users = await getData(api)
        console.log('users ',users)
       setuser(await users.data)
    }

    useEffect(() => {
      getUser()
    }, [])

  return (
    <>
    <div>{something}</div>
        <Comp user={user}/>
    </>
    )
    }
}

export default Problem5