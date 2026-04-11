import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  key:"",
  contact: {
    name: "",
    surname: "",
    tel: "",
  },
};

const contactSlice = createSlice({
  name: "contactList",
  initialState,

  reducers: {
    addContact: (state, action) => {
      const userData = action.payload;
      fetch(
        "https://contact-list-app-5360b-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(userData),
        },
      ).catch((error) => {
        console.log(error);
      });
    },

    deleteContact: (state, action) => {
      const deleteKey = action.payload;
      fetch(
        `https://contact-list-app-5360b-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${deleteKey}.json`,
        {
          method: "DELETE",
        },
      ).catch((error) => {
        console.log(error);
      });
    },

    setExistingContactKey:(state, action) => {
      state.key = action.payload 
    },

    updateContact:(state, action) => {
      console.log(action.payload);
      
    }
  },
});

export const contactListActions = contactSlice.actions;

export default contactSlice;
