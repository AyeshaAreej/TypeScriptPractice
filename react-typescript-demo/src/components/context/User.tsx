import { useContext } from "react"
import {  UserContext } from "./UserContext"

export  const User=()=>{
    const userContext=useContext(UserContext)
  const handleLogin=()=>{
    if(userContext){
        userContext.setUser({
            name:'Ayesha',
            email:'ayesha@gmail.com'
        })
    }
  }
  const handleLogout=()=>{
    if(userContext){
        userContext.setUser(null)
    }
  }

  return (
    <div>
        <h2> Use Context Hook </h2>
        <button onClick={handleLogin}>Log In</button>
        <button onClick={handleLogout}>Log Out</button>
        <div> User name is  {userContext.user?.name}</div>
        <div>User email is  {userContext.user?.email}</div>
    </div>
  )
}