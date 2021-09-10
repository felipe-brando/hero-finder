// == Composants
import Group from './Group';
import Country from './Country';
// == Composant
const Form = () => (
  <form className="fom">
    <select>
      <Group />
      <Group />
      <Group />
    </select>
    <select>
      <Country />
      <Country />
      <Country />
    </select>
  </form>
);
// == Export
export default Form;
