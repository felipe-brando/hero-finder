import { Form as Selector, Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';
// == Composants

// == Composant
const Form = ({ groupsList, countriesList }) => (
  <Selector>
    <Dropdown
      placeholder="Sélectionnez le pays"
      selection
      options={countriesList.map((country) => (
        {
          key: country.id,
          value: country.name,
          text: country.name,
        }
      ))}
    />
    <Dropdown
      placeholder="Sélectionnez le groupe"
      selection
      options={groupsList.map((group) => (
        {
          key: group.id,
          value: group.name,
          text: group.name,
        }
      ))}
    />
  </Selector>
);

Form.propTypes = {
  groupsList: PropTypes.array.isRequired,
  countriesList: PropTypes.array.isRequired,
};
// == Export
export default Form;
