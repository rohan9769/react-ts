
type PersonListProps={
    names:{
        first:string,
        last:string
    }[]
}

export const PersonList = (props:PersonListProps) =>{
    return(
        <>
            <div>
                {props.names.map((person)=>{
                    return(
                        <>
                            {person.first} - {person.last}
                        </>
                    )
                })}
            </div>
        </>
    )
}