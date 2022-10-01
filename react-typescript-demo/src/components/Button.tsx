import React from "react"

type ButtonProps ={
    // If function don't accept any parameter or do not return any thing
   //handleClick:()=>void

  //When we want an event passed into click handler
   handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number) =>void
}

export const Button=(props:ButtonProps)=>{
    return (
        <button onClick={(event)=>props.handleClick(event,1)} >Click Me</button>
)} 