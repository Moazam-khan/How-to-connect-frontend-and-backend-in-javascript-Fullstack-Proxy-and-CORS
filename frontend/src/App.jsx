import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
  }, []);
  });
  return (
    <>
      <h1>Full Stack App</h1>
      <h2>Jokes {jokes.length}</h2>
    {
      jokes.map((joke,index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }
    
    </>
  );
}

export default App;