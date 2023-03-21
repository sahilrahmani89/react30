import React ,{memo}from 'react'
let counts =0
const Problem8Child = memo(({increment,count}) => {
    console.log('problem8 child called',++counts)
  return (
    <>
      <div>count : {count}</div>
      <button onClick={increment}>increment</button>
    </>
   
  )
})

export default Problem8Child