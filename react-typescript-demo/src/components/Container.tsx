import { ContainerProps } from "./Props.types"

export const Container=(props:ContainerProps)=>{
    return(
        <div  style={props.styles}>
          Text content goes here
        </div>
    )
}