import { Form as Selector, Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';
// == Composants

// == Composant
const Form = ({
  groupsList,
  countriesList,
  currentGroup,
  setCurrentGroup,
  currentCountry,
  setCurrentCountry,
// eslint-disable-next-line arrow-body-style
}) => {
  const handleChangeGroup = (event) => {
    setCurrentGroup(event.target.textContent);
  };
  const handleChangeCountry = (event) => {
    setCurrentCountry(event.target.textContent);
  };
  return (
    <Selector>
      <Dropdown
        onChange={handleChangeCountry}
        placeholder="Sélectionnez le pays"
        selection
        options={countriesList.map((country) => (
          {
            key: country.id,
            value: country.name,
            text: country.name,
          }
        ))}
        value={currentCountry}
      />
      <Dropdown
        onChange={handleChangeGroup}
        placeholder="Sélectionnez le groupe"
        selection
        options={groupsList.map((group) => (
          {
            key: group.id,
            value: group.name,
            text: group.name,
          }
        ))}
        value={currentGroup}
      />
    </Selector>
  );
};

Form.propTypes = {
  groupsList: PropTypes.array.isRequired,
  countriesList: PropTypes.array.isRequired,
  currentGroup: PropTypes.string.isRequired,
  setCurrentGroup: PropTypes.func.isRequired,
  currentCountry: PropTypes.string.isRequired,
  setCurrentCountry: PropTypes.func.isRequired,
};
// == Export
export default Form;
