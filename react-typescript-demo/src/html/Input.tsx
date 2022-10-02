import React from 'react'


type InputProps=React.ComponentProps<'input'>

export const InputElement=(props:InputProps)=>{
    return <input {...props}/>
}