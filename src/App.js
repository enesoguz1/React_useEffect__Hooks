import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0)

  const sayac = () => {
    setCounter(counter +1);
  };

  useEffect( () => {
    console.log("Sayı Değişti");
  }, [counter]);

  return (
    <div className="App">
      <h1>Sayaç: {counter}</h1>
      <button onClick={sayac}>+1</button>
    </div>
  );
}

export default App;
