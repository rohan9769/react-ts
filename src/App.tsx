import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Greet } from './components/Greet';
import { Person } from './components/Person';

function App() {
  const personName = {
    first:'Bruce',
    last:'Wayne'
  }
  return (
    <div className="App">
      <Header title='Lion King' color='green'/>
      <Greet name='Roger' age={22} messageCount={44} isLoggedIn={true}/>
      <Person name={personName}/>
    </div>
  );
}

export default App;
