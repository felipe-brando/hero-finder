/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from 'react';
// == Composant
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import CharactersList from 'src/components/CharactersList';

import data from 'src/data/characters';

import './style.scss';
// == Composant
// eslint-disable-next-line arrow-body-style
const App = () => {
  const [currentGroup, setCurrentGroup] = useState('Avengers');
  const [currentCountry, setCurrentCountry] = useState('USA');
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters(
      data.characters.filter((character) => (
        character.group === currentGroup && character.country === currentCountry
      )),
    );
  }, [currentGroup, currentCountry]);
  return (
    <div className="app">
      <Form
        groupsList={data.groups}
        countriesList={data.countries}
        currentGroup={currentGroup}
        setCurrentGroup={setCurrentGroup}
        currentCountry={currentCountry}
        setCurrentCountry={setCurrentCountry}
      />
      <Counter charactersNumber={characters.length} />
      <CharactersList charactersList={characters} />
    </div>
  );
};

// == Export
export default App;
