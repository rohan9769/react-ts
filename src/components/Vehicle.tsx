type VehicleProps = {
    details:{
        make:string,
        model:string
    }
}
export const Vehicle = (props:VehicleProps) =>{
    return(
        <>
            <h1>The make is {props.details.make}</h1>
            <h2>The model is {props.details.model}</h2>
        </>
    )
}