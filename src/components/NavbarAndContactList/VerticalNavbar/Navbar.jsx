import React from "react";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { contactListActions } from "../../../redux/store/contactSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.contacts) || [];
  const filterType = useSelector((state) => state.contact.filterType) || "ALL";
  const favouritesCount = contacts.filter((c) => c.isFavourite).length;

  return (
    <ul>
      <li>
        <div 
          className="link" 
          style={{ cursor: "pointer", background: filterType === "ALL" ? "rgba(255,255,255,0.1)" : "transparent" }}
          onClick={() => dispatch(contactListActions.setFilterType("ALL"))}
        >
          <i className="fa-solid fa-address-book"></i>
          <div>
            <h2>All Contacts</h2>
            <p>{contacts.length} contacts</p>
          </div>
        </div>
      </li>

      <li>
        <div 
          className="link" 
          style={{ cursor: "pointer", background: filterType === "FAVOURITES" ? "rgba(255,255,255,0.1)" : "transparent" }}
          onClick={() => dispatch(contactListActions.setFilterType("FAVOURITES"))}
        >
          <i className="fa-solid fa-heart"></i>
          <div>
            <h2>Favourites</h2>
            <p>{favouritesCount} Contacts</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Navbar;
