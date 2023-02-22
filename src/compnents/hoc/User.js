import React from 'react'
import Problem5 from '../Problem5'
const api = `https://jsonplaceholder.typicode.com/users`


const User = ({user}) => {
    console.log(user)
  return (
    <div>
        <h2>User</h2>
        {
                user && user.map((item,index)=>{
                    return (
                        <p key={index}>{item.name}</p>
                    )
                })
        }
    </div>
  )
}


export default Problem5('User title passing',User,api)