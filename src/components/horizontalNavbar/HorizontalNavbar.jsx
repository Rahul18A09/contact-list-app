import React, { useState } from "react";
import "./HorizontalNavbar.css";
import Button from "../UI/Button";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { contactListActions } from "../../redux/store/contactSlice";

const HorizontalNavbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  const handleLogout = () => {
    signOut(auth);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(contactListActions.setSearchQuery(searchInput));
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    
    // Automatically restore all contacts if the user clears the search bar
    if (value === "") {
      dispatch(contactListActions.setSearchQuery(""));
    }
  };

  return (
    <div className="horizontal-nav">
      <div className="profile">
        <div className="profile-img-box">
          <i className="fa-solid fa-user"></i>
        </div>

        <h2>{user?.email ? user.email.split('@')[0] : "Rahul Bharada"}</h2>
      </div>

      <form className="search-box" onSubmit={handleSearch}>
        <input 
          type="text"  
          placeholder="Search..." 
          value={searchInput}
          onChange={handleSearchChange}
        />
        <Button name="Search"/>
      </form>

      <button 
         onClick={handleLogout} 
         className="logout-btn"
         style={{ background: "#ff4d4f", color: "white", padding: "8px 16px", border: "none", borderRadius: "4px", cursor: "pointer", marginLeft: "auto" }}
      >
        Logout
      </button>
    </div>
  );
};

export default HorizontalNavbar;
