import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initFetchContacts } from "../../../redux/store/contactActions";
import "./ContactList.css";
import ContactData from "./ContactData";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.contacts) || [];
  const filterType = useSelector((state) => state.contact.filterType) || "ALL";
  const searchQuery = useSelector((state) => state.contact.searchQuery) || "";

  const displayedContacts = contacts.filter(c => {
    // 1. Check Favourites exact logic
    if (filterType === "FAVOURITES" && !c.isFavourite) return false;
    
    // 2. Check Search Logic
    if (searchQuery.trim() !== "") {
      const lowerQuery = searchQuery.toLowerCase();
      const matchName = c.name?.toLowerCase().includes(lowerQuery);
      const matchSurname = c.surname?.toLowerCase().includes(lowerQuery);
      const matchTel = c.tel?.toLowerCase().includes(lowerQuery);
      if (!matchName && !matchSurname && !matchTel) return false;
    }

    return true;
  });

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
