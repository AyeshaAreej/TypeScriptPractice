import { useState } from "react"

type AuthUser={
    name:string,
    email:string
}

export const User=()=>{
    
   
    //Specifying state type
    const[user, setUser]=useState<null | AuthUser>(null)
     // 2nd optionType assertion no optiontal operator chaining after type assertion
    // const[user, setUser]=useState<AuthUser>({} as AuthUser)
    const[isLoggedIn, setIsLoggedIn]=useState(false)

    const handleLogin=()=>{
        setIsLoggedIn(true)
        setUser({
            name:"Ayesha",
            email:"ayeshaareej@gmail.com"
        })
    }
    const handleLogout=()=>{
        setIsLoggedIn(false)
        setUser(null)
    }
    return(
        <div>
            <button onClick={handleLogin}>lOGIN</button>
            <button onClick={ handleLogout }>LOGOUT</button>
             {isLoggedIn?<div>
            <div>User name is { user?.name } </div>
            <div>User email is { user?.email } </div> 
           </div>:<div>User is Logged Out</div>} 
        </div>
    )

}