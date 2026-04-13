import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initFetchContacts } from "../../../redux/store/contactActions";
import "./ContactList.css";
import ContactData from "./ContactData";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.contacts) || [];
  const filterType = useSelector((state) => state.contact.filterType) || "ALL";

  const displayedContacts = filterType === "FAVOURITES" 
    ? contacts.filter(c => c.isFavourite) 
    : contacts;

  useEffect(() => {
    dispatch(initFetchContacts());
  }, [dispatch]);

  return (
    <div className="contact-list">
      <table>
        <thead>
          <tr>
            <th>
              <p>Profile</p>
            </th>
            <th>
              <p>Name</p>
            </th>
            <th>
              <p>Surname</p>
            </th>
            <th>
              <p>Mobile</p>
            </th>
            <th>
              <p>Actions</p>
            </th>
          </tr>
        </thead>

        <ContactData contacts={displayedContacts} />
      </table>
    </div>
  );
};

export default ContactList;
