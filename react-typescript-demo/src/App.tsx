import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContextProvider';
import { UserContextProvider } from './components/context/UserContext';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Counter } from './components/state/Counter';
import { LoggedIn } from './components/state/LoggedIn';
import { MyUser } from './components/state/MyUser';
import {User} from './components/context/User';
import { Status } from './components/Status';

function App() {

  // creating object 
  let personName={
    first:'Ayesha',
    last:'Areej'
  }
  // creating array
  const nameList=[
   
    {
      first:'Maham',
      last:'Zehra'
    },
    {
      first:'Muhammad',
      last:'Shazain'
    },
    {
      first:'Muhammad',
      last:'Khizar'
    },
  ]

  return (
    <div className="App">
     <Greet name='Ayesha Areej' messageCount={20} isLoggedIn={true}/>
     {/* Typing an object prop */}
     <Person name={personName}/>
     {/* Typing an array */}
     <PersonList names={nameList} />
     {/* Advance props (Conditional Rendering) */}
     <Status status='success'/>
     {/* Children props */}
     <Heading>Placeholder Text</Heading>

     {/* Passing a component as a child to another component */}
     <Oscar>
      <Heading>Oscar goes to Leonardo Dicpario!</Heading>
     </Oscar>

     {/* Optional props */}
     <Greet name='Ayesha' isLoggedIn={true}/>

     {/* Event props  1-Onclick 2-Onchange*/}
     <Button 
        handleClick={(event,id)=>{console.log('Button Clicked', event,id )}}/>
       <Input value='Ayesha'   handleChange={(event)=>{console.log( event )}}/>
      
      <Container styles={{border:'1px solid black', padding:'1rem'}}/>
  
      {/* UseState Hook */}
      <LoggedIn/>
      <User/>
      {/* UseReducer Hook */}
      <Counter/>
      {/* UseContext Hook */}
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <UserContextProvider>
        <User/>
      </UserContextProvider>
    </div> 
  );
}

export default App;
