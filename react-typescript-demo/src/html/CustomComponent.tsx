import React from "react";
import { Greet } from "../components/Greet";

export const CustomComponent=(props:React.ComponentProps<typeof Greet>)=>{
    return(
        <div> 
            {/*Extracting and using prop types of Greet component  */}
          <h2>Polymorphic Components</h2>
              Hello  {props.name}
        </div>
    )
}