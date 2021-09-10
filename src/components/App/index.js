/* eslint-disable import/no-extraneous-dependencies */
// == Composant
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import CharactersList from 'src/components/CharactersList';

import data from 'src/data/characters';

import './style.scss';
// == Composant
const App = () => (
  <div className="app">
    <Form
      groupsList={data.groups}
      countriesList={data.countries}
    />
    <Counter message={`${data.characters.length} personnages trouvés`} />
    <CharactersList charactersList={data.characters} />
  </div>
);

// == Export
export default App;
