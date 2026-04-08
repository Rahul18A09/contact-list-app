import React from "react";
import "./ContactListApp.css";
import HorizontalNavbar from "./horizontalNavbar/HorizontalNavbar";
import NavBarAndContactList from "./NavbarAndContactList/NavBarAndContactList";

const ContactListApp = () => {
  return (
    <div className="contact-list-app">
      <HorizontalNavbar />
      <NavBarAndContactList />
    </div>
  );
};

export default ContactListApp;
