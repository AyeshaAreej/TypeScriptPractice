import React from 'react'
import { InputProps } from './Props.types'
// props destructuring
export const Input=({value,handleChange}:InputProps)=>{

    // Defining handler within a component 
    const handleInputChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event)
    }
    return(
        // <input type="text" name="input1" value={props.value} onChange={props.handleChange}/>
        <input type="text" name="input1" value={value} onChange={handleInputChange}/>
        )
}