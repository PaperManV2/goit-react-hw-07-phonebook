import { deleteContact } from '../../../redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';

const ContactList = ({ filter }) => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css['contact-list']}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css['contact-list__item']}>
          <span className={css['contact-list__item-name']}>{contact.name}</span>
          <span className={css['contact-list__item-phone']}>
            {contact.phone}
          </span>
          <button onClick={() => handleDelete(contact.id)}>Usuń Kontakt</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
