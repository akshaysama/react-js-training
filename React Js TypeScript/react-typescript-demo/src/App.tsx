import React from 'react';
import './App.css';
import {Toast} from './components/Toast'
// import {Private} from './components/auth/Profile'
// import {DomRef} from "./components/ref/DomRef"
// import{Counter} from './components/Class/Counter'
// import {Greet} from "./components/Greet"
// // import {Person} from "./components/Person"
// import {PersonList} from "./components/PersonList"
// import {Status} from "./components/Status"
// import {Heading} from "./components/Heading"
// import {Oscar} from "./components/Oscar"
// import {Button} from "./components/Button"
// import {Input} from "./components/Input"
// import {UserContextProvider} from "./components/Context/UserContextProvider"
// import {User} from "./components/Context/User"
// import {Container} from "./components/Container"
function App() {
  <Toast position ='right-center'>
    hello therr
  </Toast>
  // <Counter message="hoy"/>
  // <Private isLoggedIn={true} component={profile} />
  // <DomRef />
  // const personName ={
  //   first:'Bruce',
  //   last:'wayne'
  // }
  // const nameList =[
  //   {
  //     first:'Bruce',
  //     last:'wayne'
  //   }, {
  //     first:'Mark',
  //     last:'Kent'
  //   },
  //   {
  //     first:'SLADE',
  //     last:'WILSON'
  //   }
  // ]
  return (
    <div className="App">
      {/* <UserContextProvider>
      <User />
      </UserContextProvider> */}

      {/* <Greet name  ="Viswas"  isLoggedIn={true}/> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} />
      <Status status ="error"/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to decaprio</Heading>
      </Oscar>
      <Button handleClick={(event,id)=>{
        console.log('Button clicked',event,id)
      }}></Button>
      <Input value="" handleChange={e=>console.log(e)} />
      <Container styles={{border:'1px solid black',padding:'1rem'}}/> */}
    </div>
  );
}

export default App;
