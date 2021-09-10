import { Label, Segment, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
// == Composant
const Character = (
  {
    name,
    group,
    country,
    avatar,
  },
) => (
  <Segment>
    <Image src={avatar} avatar />
    <span>{name}&nbsp;</span>
    <Label color="blue" horizontal>
      {group}
    </Label>
    <Label color="green" horizontal>
      {country}
    </Label>
  </Segment>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

// == Export
export default Character;
