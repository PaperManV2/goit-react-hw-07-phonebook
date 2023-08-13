import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { fetchContacts, saveContact } from '../../redux/contactsSlice';
import { setFilter } from '../../redux/filterSlice';
import css from './Phonebook.module.css';
import axios from 'axios';

const API_URL = 'https://64b2b86138e74e386d557aa2.mockapi.io/contacts';

const Phonebook = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        dispatch(fetchContacts(response.data));
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleAddContact = async newContact => {
    try {
      const response = await axios.post(API_URL, newContact);
      dispatch(saveContact(response.data));
    } catch (error) {
      console.error('Error saving contact:', error);
    }
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
