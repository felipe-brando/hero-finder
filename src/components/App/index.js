/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
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
      <Counter message={`${data.characters.length} personnages trouvés`} />
      <CharactersList charactersList={data.characters} />
    </div>
  );
};

// == Export
export default App;
