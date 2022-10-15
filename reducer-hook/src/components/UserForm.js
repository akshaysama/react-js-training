import React,{useState} from 'react'

function UserForm() {
    const[firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const submitHandler = e=>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
    }
  return (
        <form onSubmit = {submitHandler}>
            <div>
                <label>FirstName</label>
                <input value={firstName} onChange ={e=>setFirstName(e.target.value)} type="text" />
            </div>
            <div>
                <label>lastname</label>
                <input value={lastName} onChange ={e=>setLastName(e.target.value)} type="text" />
            </div>
        </form>

  )
}

export default UserForm