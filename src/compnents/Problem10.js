import React,{useState} from 'react'
import useJokeCustom from '../helper/useJokeCustom'

const Problem10 = () => {
    const firstRef = React.createRef()
    const secRef = React.createRef()
    // 
    const [firstName, setfirstName] = useState('Anil')
    const [secondName, setsecondName] = useState('Reddy')

    const joke = useJokeCustom(firstName,secondName)
    //
    console.log(joke) 
    //
    const handleClick = e=>{
        e.preventDefault()
        setfirstName(firstRef.current.value)
        setsecondName(secRef.current.value)
    }
  return (
    <div>
        <input 
         placeholder='firstname' type='text'
         ref={firstRef}
        />
        <input 
         placeholder='SecondName' type='text'
         ref={secRef}
        />
        <button onClick={e=>handleClick(e)}>Generate Joke</button>
        {
            joke && <p>
                joke :{joke}
            </p>
        }
    </div>
  )
}

export default Problem10