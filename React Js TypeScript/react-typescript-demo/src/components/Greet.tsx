type GreetProps = {
    name:string
    messageCount?:number
    isLoggedIn:boolean
}
export const Greet =(props:GreetProps)=>{    
    let { messageCount = 0 }  = props
    return(
        <div>
         <h2>  {
         props.isLoggedIn ? `Welcome ${props.name} !  viswas you have ${props.messageCount} messages` : "welcome"}
         </h2>

        </div>
    )
}