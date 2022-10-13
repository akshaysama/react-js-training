import React from 'react'
import Person from"./person"

function NameList() {
        const persons =[
            {
                id:1,
                name:"diana",
                age:28,
                skill:"React"
    
            },
            {
                id:2,
                name:"bruce",
                age:28,
                skill:"angular"
    
            },
            {
                id:3,
                age:22,
                name:"bruce",
                skill:"viu"
            }
        ]
        const personList = persons.map(person => <Person key ="{person.id}" person={persons} />)
  return  <div>{personList}</div>
}

export default NameList