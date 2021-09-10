/* eslint-disable import/no-extraneous-dependencies */
// == Composant
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import CharactersList from 'src/components/CharactersList';

import './style.scss';
// == Composant
const App = () => (
  <div className="app">
    <Form />
    <Counter />
    <CharactersList />
  </div>
);

// == Export
export default App;
