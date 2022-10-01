import React from 'react'
import { OscarProps } from './Props.types'
export const Oscar=(props:OscarProps)=>{
    return(
        <div> 
            {props.children}
        </div>
    )
}