import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
// == Composants
import Character from './Character';
// == Composant
const CharactersList = ({ charactersList }) => (
  <Segment.Group raised>
    {charactersList.map((character) => (
      <Character key={character.name} {...character} />
    ))}
  </Segment.Group>
);

CharactersList.propTypes = {
  charactersList: PropTypes.array.isRequired,
};

// == Export
export default CharactersList;
