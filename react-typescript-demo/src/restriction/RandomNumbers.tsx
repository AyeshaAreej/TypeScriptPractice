type RandomNumberType={
    value:number
}
type PositiveNumber= RandomNumberType &{
    isPositive: boolean
    isNegative?:never
    isZero?:never
}
type NegativeNumber= RandomNumberType &{
    isNegative: boolean
    isPositive?:never
    isZero?:never
}
type Zero=RandomNumberType &{
    isZero:boolean
    isNegative?: never
    isPositive?:never

}


type RandomNumberProps= PositiveNumber | NegativeNumber | Zero



export const RandomNumbers=({
    value,
    isPositive,
    isNegative,
    isZero
}:RandomNumberProps)=>{
    return(
        <div>
            <h2>Restricting props</h2>
            {value}{isPositive && 'positive'} {isNegative && 'negative' }{' '}
            {isZero && 'zero'}
        </div>
    )
}