export interface Props{
    title:string
    color?:string
}
export const Header = (props:Props) =>{
    return(
        <>
            <h1 style={{color:props.color ? props.color : 'blue'}}>Title : {props.title}</h1>
        </>
    )
}