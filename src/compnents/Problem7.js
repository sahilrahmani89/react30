import React,{useState,useMemo} from 'react'

const Problem7 = () => {
    const [count,setcount] = useState(0)
    const [factorial,setfactorial] = useState(1)
    const [counts,setcounts] = useState(0)
    //
   
    //
    const facttheNum = useMemo(() => {
      setcounts(counts=>counts+1)
        console.log('calculating factorial called',counts)
        let result = 1;
                for (let i = 1; i <= Number(count); i++) {
                result *= i;
                }
                console.log(result)
            return result;
    },[count])
    //
    const incrementCount = () =>{
        setcount((count)=>count+1)
    }
    const handleFact = () =>{
        
        setfactorial(facttheNum)
    }
  return (
    <div>
        <p>count: {count}</p>
        <button onClick={incrementCount}>Increment Count</button>
        <div>factorial : {factorial}</div>
        <button onClick={handleFact}>factorial</button>
    </div>
  )
}

export default Problem7