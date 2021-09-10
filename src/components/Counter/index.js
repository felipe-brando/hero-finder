import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
// == Composant
const Counter = ({ message }) => (
  <Message info>
    <Message.Header>{ message }</Message.Header>
  </Message>
);

Counter.propTypes = {
  message: PropTypes.string,
};

Counter.defaultProps = {
  message: 'Selectionnez un langage et/ou une spé',
};

// == Export
export default Counter;
