import {useReducer,useState} from 'react';
import { CodeAction } from 'typescript';
 
type CounterState={
    count:number 
}
type UpdateAction={
    type:'increment'| 'decrement',
    payload:number
 }
 type ResetAction={
    type: 'reset',
 }
 type CounterAction= UpdateAction | ResetAction

const initialState={count :0}


// Function responsible for updating the state
function reducer(state: CounterState ,action:CounterAction ){
 switch(action.type){
    case 'increment':
    return {count:state.count+action.payload}
    case 'decrement':
        return {count:state.count-action.payload}
    case 'reset':
        return initialState;
        default:
        return state
 }
}

export const Counter=()=>{
const [state,dispatch]=useReducer(reducer,initialState)

return(

    <> <h2>UseReducer Hook</h2>
    Count:{state.count}
    <button onClick={()=> dispatch({type:'increment', payload:10}) }>Increment 10</button>
    <button onClick={()=> dispatch({type:'decrement', payload:10}) }>Decrement 10</button>
    {/* Reset Without a payload */}
    <button onClick={()=> dispatch({type:'reset', }) }>Reset</button>
    </>
)


}