import { setContacts } from '../../redux/contactsSlice';
import { setFilter } from '../../redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './Phonebook.module.css';
import React, { useEffect } from 'react';

const Phonebook = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    dispatch(setContacts([...contacts, newContact]));
  };

  const handleFilterChange = value => {
    dispatch(setFilter(value));
  };

  return (
    <div className={css['phonebook-container']}>
      <h1 className={css['phonebook-title']}>Phonebook</h1>
      <div className={css['phonebook-section']}>
        <ContactForm onAddContact={handleAddContact} />
      </div>
      <div className={css['phonebook-section']}>
        <h2 className={css['phonebook-section-title']}>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList contacts={contacts} filter={filter} />
      </div>
    </div>
  );
};

export default Phonebook;
