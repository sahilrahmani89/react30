import React,{useState,useEffect} from 'react'

const useJokeCustom = (fname,sname) => {
    const [joke, setjoke] = useState('')
    const [err,seterr] = useState()
    const getJoke = async() =>{
        try{
            seterr('')
            await fetch(`https://v2.jokeapi.dev/joke/Any?type=single`)
            .then((res)=>res.json())
            .then((data)=>{
                setjoke(data.joke)
            })
        }
        catch(err){
            console.log(err)
            seterr('failed to fetch')
        }
    }
    useEffect(() => {
      getJoke()
    }, [fname, sname])
    
  return err && err==''? err :joke 
}

export default useJokeCustom