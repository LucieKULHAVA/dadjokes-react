import React, { useState } from 'react';
import './style.css';
import { jokes } from '../assets/jokes';
import Joke from '../Joke/index';

const App = () => {
  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};

export default App;
