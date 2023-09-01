import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { Vehicle } from './components/Vehicle';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first:'Bruce',
    last:'Wayne'
  }
  const vehicleDetails={
    make:'Honda',
    model:'CRV'
  }
  const nameList = [
    {first:'Bruce',last:'Wayne'},
    {first:'Bruce',last:'Wayne'},
    {first:'Bruce',last:'Wayne'}
  ]
  return (
    <div className="App">
      <Header title='Lion King' color='green'/>
      <Greet name='Roger' age={22} messageCount={44} isLoggedIn={true}/>
      <Person name={personName}/>
      <Vehicle details={vehicleDetails}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
