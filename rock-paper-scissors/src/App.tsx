import { useState } from 'react';
import './App.css';
import { Game } from './components/Game';
import { Footer } from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Game />
    </div>
    // <div className="App" style={{
    //   display: 'flex', 
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   justifyContent: 'space-between',
    // }}>
    //   <GameObject type='rock' />
    //   <GameObject type='paper' />
    //   <GameObject type='scissors' />
    //   <GameObject type='lizard' />
    //   <GameObject type='spock' />
    // </div>
  )
}

export default App
