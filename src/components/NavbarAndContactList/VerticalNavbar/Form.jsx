import React, { useEffect, useState } from "react";
import "./Form.css";
import addnewImage from "../../../../src/assets/images/add-new.svg";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { contactListActions } from "../../../redux/store/contactSlice";

const Form = () => {

  const [userData, setUserData] = useState(
    {
name:"",
surname: "",
tel:""
  }
);

const dispatch  = useDispatch();

const existingContactkey = useSelector(state => state.contact.key);


useEffect(() => {

  const fetchExisingContact = async () => {
    const res = await fetch(`https://contact-list-app-5360b-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${existingContactkey}.json`)
    const existingContact = await res.json();
    setUserData({
      name:existingContact?.name || "",
      surname:existingContact?.surname || "",
      tel:existingContact?.tel || ""
    })
  }

  fetchExisingContact();

}, [existingContactkey]);

const handleSubmit = (e) => {
  e.preventDefault();

  if(existingContactkey) {
    dispatch(contactListActions.updateContact())
  }
  // console.log(userData);
  dispatch(contactListActions.addContact(userData));

  setUserData({
    name: '',
    surname: '',
    tel: ''
  });

}


const inputHandler = (e) => {
 const {name , value} =  e.target;
  setUserData((preValue) => {
    return {
...preValue, [name]: value
    }
  })
  
}

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="add-new-img">
        <img src={addnewImage} alt="" />
      </div>

      <div className="input-text">
        <input type="text" placeholder="name" name="name" value={userData.name} onChange={inputHandler}/>
        <input type="text" placeholder="surname" name="surname" value={userData.surname} onChange={inputHandler} />
      </div>

      <div className="input-tel">
        <input type="text" placeholder="9997778880" name="tel" value={userData.tel} onChange={inputHandler}/>
      </div>

      <Button name="Add" />
    </form>
  );
};

export default Form;
;