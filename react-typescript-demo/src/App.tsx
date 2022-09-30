import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

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
    </div>
  );
}

export default App;
