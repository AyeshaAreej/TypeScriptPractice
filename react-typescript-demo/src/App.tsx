import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
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
    </div>
  );
}

export default App;
