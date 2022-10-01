export type ButtonProps ={
    // If function don't accept any parameter or do not return any thing
   //handleClick:()=>void

  //When we want an event passed into click handler
   handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number) =>void
}

export type ContainerProps={
    styles: React.CSSProperties
}

export type GreetProps={
    name:string,
    // optional type
    messageCount?:number,
    isLoggedIn:boolean   
     
}

export type HeadingProps={
    children:string
}
export type InputProps={
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>) =>void
}

export type OscarProps={
    children:React.ReactNode
}

export type PersonProps={
    name:{
        first:string,
        last:string
    }
}

export type PersonListProps={
    names:{
        first:string,
        last:string
    }[]
}
    