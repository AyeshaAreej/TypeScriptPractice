type ListProps<T>={
    // If we want to pass an array of object we need generic types to tell it that type can vary
    // items:string[] | number[]
    items:T[]
    onClick:(value: T) => void
}
export const List= <T extends {id:number, first:string, last:string}>({
    items,onClick
}: ListProps<T>)=>{
   return (
    <div>
        <h2>Generic Pops</h2>
        <h6>List of items</h6>
        {items.map((item,index)=>{
            return (
                <div key={item.id} onClick={()=>onClick(item)}>
                    {item.first} {item.last}
                </div>
            )
        })}
    </div>
   )
}
