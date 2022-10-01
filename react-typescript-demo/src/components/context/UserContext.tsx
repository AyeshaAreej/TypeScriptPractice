import React,{useState, createContext} from 'react'

export type AuthUser={
    name:string,
    email:string
}

type userContextType={
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type userContextProviderProps={
    children: React.ReactNode
}
// export const UserContext =createContext<userContextType | null>(null)
// type assertion
export const UserContext =createContext({} as userContextType)


export const UserContextProvider=({children}:userContextProviderProps)=>{
 
  const [user, setUser]=useState<AuthUser | null>(null)
  return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}