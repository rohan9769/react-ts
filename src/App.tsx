import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { Vehicle } from './components/Vehicle';

function App() {
  const personName = {
    first:'Bruce',
    last:'Wayne'
  }
  const vehicleDetails={
    make:'Honda',
    model:'CRV'
  }
  return (
    <div className="App">
      <Header title='Lion King' color='green'/>
      <Greet name='Roger' age={22} messageCount={44} isLoggedIn={true}/>
      <Person name={personName}/>
      <Vehicle details={vehicleDetails}/>
    </div>
  );
}

export default App;
