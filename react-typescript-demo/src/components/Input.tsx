import React from 'react'
type InputProps={
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>) =>void
}

export const Input=(props:InputProps)=>{

    // Defining handler within a component 
    const handleInputChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event)
    }
    return(
        // <input type="text" name="input1" value={props.value} onChange={props.handleChange}/>
        <input type="text" name="input1" value={props.value} onChange={handleInputChange}/>
        )
}