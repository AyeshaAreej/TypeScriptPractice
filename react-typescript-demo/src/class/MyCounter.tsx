import { Component, ReactNode } from "react";

type CounterProps={
    message:string
}

type CounterState={
    count:number
}

export class MyCounter extends Component<CounterProps, CounterState>{
   state={
       count:0,
   }
   handleClick=()=>{
    this.setState((prevState)=>({count: prevState.count+1}))
   }

   render() {
       return(
        <div>
            <h2>This is a Class Component</h2>
            <button onClick={this.handleClick}>Increment</button>
            {this.props.message} {this.state.count}
        </div>
       )
   }
}