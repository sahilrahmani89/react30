import React from 'react'
import Problem5 from '../Problem5'

const api = `https://jsonplaceholder.typicode.com/posts`

const Post = ({user}) => {
  
  return (
    <>
        <h1>Post</h1>

        {
            user && user.slice(0,10).map((item,index)=>{
                return(
                    <p key ={index}>
                        {item.title}
                    </p>
                )
            })
        }
    </>
    
  )
}

export default Problem5('post,tittle passing', Post,api)