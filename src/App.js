import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Array from './components/Array';
import Hooksobj from './components/Hooksobj';
import Form from './components/Form';
import UseEffects from './components/UseEffects';
import WindowSize from './components/WindowSize';
import API from './components/API'
import Uncontrolled from './components/Uncontrolled';
function App() {

  
  const [user,setUser]=useState(['all is well'])
  const beb="is it working ....."
  const handleClick=()=>{
      setUser(beb)
  }
  return (
    <div className="App">
    {/* //   <h1>{user}</h1>
    //   <button onClick={handleClick}>click me</button>
    // <Array></Array>

    // <Hooksobj></Hooksobj>
    // <Form></Form>
    // <UseEffects></UseEffects>
    // <WindowSize></WindowSize>
    // <API></API> */}

    <Uncontrolled></Uncontrolled>
    </div>
  );
}

export default App;
