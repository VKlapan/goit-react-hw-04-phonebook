import PropTypes from 'prop-types';
import { ContactItemElement, ItemContent } from './ContactItem.styled';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  return (
    <ContactItemElement>
      <ItemContent>{name}</ItemContent>
      <ItemContent>{number}</ItemContent>
      <button onClick={() => onDelete(id)}> DELETE</button>
    </ContactItemElement>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
