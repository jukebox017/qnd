import { Button, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StarWarsPerson } from '../../types/StarWarsPerson';

function Swapi() {
  let [person, setPerson] = useState<string>('');
  let [fetching, setIsFetching] = useState<boolean>(false);

  const getStarWarsPerson = async() => {
    setIsFetching(true);
    const randomInt = Math.floor(Math.random() * 49) + 1;
    const res = await fetch(`https://swapi.dev/api/people/${randomInt}`);
    const person: StarWarsPerson = await res.json();
    setPerson(person.name);
    setIsFetching(false);
  }

  return (
    <div style={{padding: '30px'}}>
      <h1 style={{color: 'black'}}>Star Wars API Example</h1>

      {!person && !fetching && (
        <p>Click <Button onClick={getStarWarsPerson}>here</Button> to pick a random Star Wars character from the Star Wars API.</p>
      )}

      {fetching && (
        <div>
          <p>Retreiving Star Wars character...</p>
          <CircularProgress />
        </div>
      )}

      {person && (
        <div>
          <p>Your random Star Wars character is:</p>
          <h2 style={{color: 'black'}}>{person}</h2>
        </div>
      )}

      <div style={{marginTop: '80px'}}>
        Click <Link to={`/`}>here</Link> to go back.
      </div>
    </div>
  )
}

export default Swapi;
