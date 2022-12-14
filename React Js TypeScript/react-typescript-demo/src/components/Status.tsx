type StatusProp = {
    status:'loading'|'success'|'error'
}
export const Status = (props:StatusProp)=>{
    let message
    if(props.status ==="success"){
         message = "Success"
    }else if(props.status ==="loading"){
         message = "Loading"
    }else if(props.status === "error"){
        message = "Error fetching data"
    }
      return(
        <div>
            <h2>
                status - {message}
            </h2>
        </div>
      )
}