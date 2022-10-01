import { GreetProps } from "./Props.types";
//Two benefits 1 intellisense and 2 if assign 10 to name then it will show error before heading to a browser 
// What to use interfaces or type
//Answer: 1 Type when building libraries and interfaces when building applications
export const Greet=(props: GreetProps)=>{
    //  Destructing messageCount from props and assigning a default value
    const { messageCount = 0 }=props;

    return(
        <div>
            <h2>
            {
            props.isLoggedIn ? `Welcome ${props.name} You have ${messageCount} unread messages ` 
            : `Welcome Guest`} 
            </h2>
        </div>
    )
}