import { Form as Selector, Dropdown, Grid } from 'semantic-ui-react';
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
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <p>Sélectionnez un pays</p>
            <Dropdown
              fluid
              label="test"
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
          </Grid.Column>
          <Grid.Column>
            <p>Sélectionnez un groupe</p>
            <Dropdown
              fluid
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
