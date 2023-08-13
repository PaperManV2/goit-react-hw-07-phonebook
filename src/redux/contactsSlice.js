import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://64d8c6245f9bf5b879ce8b5a.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetch', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const saveContact = createAsyncThunk('contacts/save', async contact => {
  const response = await axios.post(API_URL, contact);
  return response.data;
});

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async contactId => {
    await axios.delete(`${API_URL}/${contactId}`);
    return contactId;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(saveContact.fulfilled, (state, action) => {
        return [...state, action.payload];
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return state.filter(contact => contact.id !== action.payload);
      });
  },
});

export default contactsSlice.reducer;
