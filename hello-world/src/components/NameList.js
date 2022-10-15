import React from 'react'
import Person from"./person"

function NameList() {
    const names =['bruce','CLark','diana']
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
        const nameList = names.map((name,index) =><h2 key={index}>{index}{name}</h2>)
        return <div>{nameList}</div>
}

export default NameList