// Advanced Props -Conditional rendering
type StatusProps={
    // Union of string literals to avoid getting any random string
     status:'loading' | 'success' | 'error'
}

export const Status=(props:StatusProps)=>{
    
    let message;
    if(props.status==='loading'){
        message='Loading...'
    }else if (props.status==='success'){
        message='Data fetched successfully!'
    }else{
        message='Error in fetching data';
    }


    return (
        <div>
            <h2>Status - {message}</h2>
           
        </div>
    )
}