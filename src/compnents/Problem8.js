import React,{useState, useCallback} from 'react'
import Problem8Child from './Problem8Child'

const Problem8 = () => {
    const [count,setcount] = useState(0)
    const [count1,setcount1] = useState(1)
    
    //
    const incrementValue =() =>{
        setcount(count=>count+1)
    }
    ///
    const memoizedCallback = useCallback(
      () => {
        incrementValue()
      },
      [count],
    )
    //
    const increment2 = () =>{
        setcount1(count1=>count1+1)
    }
    ///
  return (
    <div>
      
        <Problem8Child 
            count={count}
          increment={memoizedCallback}
        />

        <div>COunt1 :{count1}</div>
        <button onClick={increment2}>Increment</button>
    </div>
  )
}

export default Problem8