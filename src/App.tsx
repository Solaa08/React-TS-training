import {useState} from 'react'
import './App.css';

// Import Component 
import List from './components/List';
import AddList from './components/AddList';


export interface AppState {
  people : {
    name: string;
    age: number,
    img: string,
    discription?: string
  }[];
}

function App() {

  const [people, setPeople] = useState<AppState['people']>([
    {
      name: "Bill Gates",
      age: 66,
      img: "",
      discription: "William Henry Gates III is an American business magnate, software developer",
    }
  ])

  return (
    <div className="App">

      <List people={people} />
      <AddList people={people} setPeople={setPeople} />

    </div>
  );
}

export default App;