import React from 'react'
import './NavBarAndContactList.css';
import VerticalNavbar from './VerticalNavbar/VerticalNavbar';
import ContactList from './ContactList/ContactList';


const NavBarAndContactList = () => {
  return (
    <div className='navbar-and-list'>
      <VerticalNavbar/>
      <ContactList/>
    </div>
  )
}

export default NavBarAndContactList
