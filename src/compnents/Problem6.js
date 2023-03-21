import React ,{useState,useMemo}from 'react'


const Problem6 = () => {
    const [number, setnumber] = useState(0)
    const [retrieveNum,setretrieveNum] = useState()
    //
     const multipleBy10Memoized = useMemo(() => {
        const multipleBy10 = () =>{
           let cache = {}
           return(num)=>{
               console.log('num',num)
               if (num in cache) {
                   console.log('Fetching from cache: ');
                   return cache[num];
                 }
               else{
                   console.log('first time calculate')
                   let a = num * 10
                   cache[num] =a 
                   return a
               }
           }
       }
       return multipleBy10();
       }, []);

    const getMultiple =()=>{
      let b =  parseInt(number)
        let a = multipleBy10Memoized(b)
        setretrieveNum(a)
    }
    const onChangeHandler = (e)=>{
        setnumber(e.target.value)
    }
    //
  return (
    <div>
        <label >10* Multiple of input</label>
        <input 
          name='number'
          type='number'
          value={number}
          onChange={e=>onChangeHandler(e)}
        />  
        <button onClick={getMultiple}>Submit</button>

        {
            retrieveNum &&
            <div>
                Retrived Data : { retrieveNum}
            </div>
        }
    </div>
  )
}

export default Problem6