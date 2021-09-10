/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from 'react';
import { Image, Header } from 'semantic-ui-react';
// == Composant
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import CharactersList from 'src/components/CharactersList';

import data from 'src/data/characters';

import './style.scss';
import logo from 'src/assets/Marvel_Logo.png';
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
      <Header textAlign="center">
        <Image src={logo} size="massive" />
      </Header>
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
