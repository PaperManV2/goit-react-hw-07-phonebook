import { createSlice, createAction } from '@reduxjs/toolkit';

const saveContact = createAction('contacts/save');
const deleteContact = createAction('contacts/delete');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: JSON.parse(localStorage.getItem('contacts')) || [],
  reducers: {
    setContacts: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(saveContact, (state, action) => {
        const updatedState = [...state, action.payload];
        localStorage.setItem('contacts', JSON.stringify(updatedState));
        return updatedState;
      })
      .addCase(deleteContact, (state, action) => {
        const updatedState = state.filter(
          contact => contact.id !== action.payload
        );
        localStorage.setItem('contacts', JSON.stringify(updatedState));
        return updatedState;
      });
  },
});

export const { setContacts } = contactsSlice.actions;
export { saveContact, deleteContact };

export default contactsSlice.reducer;
