import React from "react"


function Person(person){
    console.log(person)
    return(
        <div>
            <h2>
            I am {person.name} . I am {person.age} years old . i Know {person.skill}
    </h2>
    </div>
    )
}
export default Person