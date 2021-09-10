import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
// == Composant
// eslint-disable-next-line arrow-body-style
const Counter = ({ charactersNumber }) => {
  let sentence;
  if (charactersNumber === 0) {
    sentence = 'Aucun personnage pour cette recherche';
  }
  else if (charactersNumber === 1) {
    sentence = 'Un personnage trouvé';
  }
  else {
    sentence = `${charactersNumber} personnages trouvés`;
  }
  return (
    <Message info>
      <Message.Header>{sentence}</Message.Header>
    </Message>
  );
};

Counter.propTypes = {
  charactersNumber: PropTypes.number.isRequired,
};

// == Export
export default Counter;
