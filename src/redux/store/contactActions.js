import { contactListActions } from "./contactSlice";

export const initFetchContacts = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://contact-list-app-5360b-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json",
        { cache: 'no-store' }
      );
      const data = await res.json();
      
      if (!data) {
        dispatch(contactListActions.setContacts([]));
        dispatch(contactListActions.fetchTotalContacts(0));
        return;
      }

      const contactsData = [];
      for (const key in data) {
        contactsData.push({
          key: key,
          name: data[key].name,
          surname: data[key].surname,
          tel: data[key].tel,
          isFavourite: data[key].isFavourite || false,
        });
      }

      dispatch(contactListActions.setContacts(contactsData));
      dispatch(contactListActions.fetchTotalContacts(contactsData.length));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addContact = (userData) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://contact-list-app-5360b-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      
      const resData = await res.json();
      
      // The POST response from Firebase contains a "name" property which is the unique string key
      if (resData && resData.name) {
         const newContact = {
            key: resData.name,
            name: userData.name,
            surname: userData.surname,
            tel: userData.tel,
            isFavourite: false
         };
         
         // Append locally right away to avoid Firebase delay/caching before next GET
         dispatch(contactListActions.appendContact(newContact));
      } else {
         // Fallback 
         dispatch(initFetchContacts());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateContact = (contactData) => {
  return async (dispatch) => {
    try {
      const { key, name, surname, tel } = contactData;
      await fetch(
        `https://contact-list-app-5360b-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${key}.json`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, surname, tel }),
        }
      );

      dispatch(contactListActions.clearExistingContactKey());
      // Refetch all contacts to update Redux store
      dispatch(initFetchContacts());
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteContact = (key) => {
  return async (dispatch) => {
    try {
      await fetch(
        `https://contact-list-app-5360b-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${key}.json`,
        {
          method: "DELETE",
        }
      );

      // Refetch all contacts to update Redux store
      dispatch(initFetchContacts());
    } catch (error) {
      console.log(error);
    }
  };
};

export const toggleFavouriteContact = (contact) => {
  return async (dispatch) => {
    try {
      const newFavouriteState = !contact.isFavourite;
      
      // Optimistic UI update
      dispatch(contactListActions.toggleContactFavourite(contact.key));

      await fetch(
        `https://contact-list-app-5360b-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${contact.key}/isFavourite.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newFavouriteState),
        }
      );
    } catch (error) {
      console.log(error);
      // Revert on error
      dispatch(contactListActions.toggleContactFavourite(contact.key));
    }
  };
};
