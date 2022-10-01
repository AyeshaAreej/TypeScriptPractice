import {useRef, useEffect} from 'react';


export const DomRef=()=>{
    const inputRef=useRef<HTMLInputElement>(null)

    useEffect(()=>{
     inputRef.current?.focus()
    },[])
 
    return(
        <div>
            <h2>UseRef Hok</h2>
            <input type='text' ref={ inputRef}/>
        </div>
    )
}

