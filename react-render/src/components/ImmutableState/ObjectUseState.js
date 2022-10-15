import React,{useState} from 'react'
const initialState = {
    fname:'bruce',
    lname:"wayne"
}
export const ObjectUseState = () => {
    const [person,setPerson] = useState(initialState)
    const changeName = ()=>{
        person.fname = 'clark'
        person.lname = 'kent'
        setPerson(person)
        const newPerson = {...person}
        newPerson.fname = 'clark'
        newPerson.lname = 'kent'
        setPerson(newPerson)
    }
    console.log('ObjectUseState Render')
  return (
    <div><button onClick = {changeName}> {person.fname}{person.lname}</button></div>
  )
}
