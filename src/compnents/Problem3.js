import React,{useState}from 'react'



const Problem3 = ({familyTree}) => {
    console.log(familyTree)
    const [hide,sethide] = useState(false)

    const toggleHide = () =>{
        sethide(!hide)
    }
  return (
    <>
    <div style={{paddingLeft:'10px'}}>
        <span onClick={toggleHide}>
            {familyTree.name}
        </span>

        {
            hide ? (
                familyTree?.children?.map((child,index)=>{
                    return(
                        <div style={{paddingLeft:'10px'}} key={index}>
                        <Problem3 familyTree={child}/>
                        </div>
                    )
                })
            ) : (<></>)
        }
    </div>
    </>
  )
}

export default Problem3