import React from "react";

type GreetProps = {
    name:string
    age:number
    messageCount:number,
    isLoggedIn:boolean
}

export const Greet = (props:GreetProps) =>{
    return(
        <>
            {props.isLoggedIn ? `Welcome ${props.name}` : `Welcome Guest`}
            <h1>Hello This is {props.name} and age is {props.age} and no of messages are : {props.messageCount} </h1>
        </>
    )
}