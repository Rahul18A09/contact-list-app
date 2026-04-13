import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  key:"",
  contact: {
    name: "",
    surname: "",
    tel: "",
  },
  contacts: [],
  totalCOntacts : 0,
  filterType: "ALL" // "ALL" or "FAVOURITES"
};

const contactSlice = createSlice({
  name: "contactList",
  initialState,

  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },

    appendContact: (state, action) => {
      state.contacts.push(action.payload);
      state.totalCOntacts += 1;
    },

    toggleContactFavourite: (state, action) => {
      const contact = state.contacts.find((c) => c.key === action.payload);
      if (contact) {
        contact.isFavourite = !contact.isFavourite;
      }
    },

    setFilterType: (state, action) => {
      state.filterType = action.payload;
    },

    setExistingContactKey:(state, action) => {
      state.key = action.payload 
    },

    clearExistingContactKey:(state) => {
      state.key = "";
    },

    fetchTotalContacts : (state, action) => {
         state.totalCOntacts  = action.payload;
    }
  }

});

export const contactListActions = contactSlice.actions;

export default contactSlice;
