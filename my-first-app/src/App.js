import React, { useState } from 'react';
import Tweet from './tweet';
import './App.css';

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className='app'>
      <h1 className={isRed ? 'red' : 'green'}>Estou piscando!</h1>
      <button onClick={Increment}>Mudar cor</button>
      <h1>Numero de vezes clicadas: {count}</h1>
    </div>
  );
}

export default App;

//For exemple if a have some crazy api, it's will look like it +/-

// function App() {
//   like my JSON object
//   const [users, setusers] = useState([
//     { name: 'Lucas', message: 'Hello World' },
//     { name: 'Dias', message: 'Hello World2' },
//     { name: 'Tavares', message: 'Hello World3' }
//   ]);

//   return (
//     <div className='app'>
//       {users.map(user => (
//       <Tweet name={user.name} message={user.message} />
//       ))}
//     </div>
//   );
// }

// export default App;
