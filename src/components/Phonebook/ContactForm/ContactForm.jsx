import { saveContact } from '../../../redux/contactsSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || phone.trim() === '') {
      return;
    }

    const newContact = {
      id: Date.now().toString(),
      name,
      phone,
    };

    dispatch(saveContact(newContact));
    setName('');
    setPhone('');
  };

  return (
    <form className={css['contact-form']} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <button type="submit">Dodaj Kontakt</button>
    </form>
  );
};

export default ContactForm;
