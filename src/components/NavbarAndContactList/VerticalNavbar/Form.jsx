import React, { useState } from "react";
import "./Form.css";
import addnewImage from "../../../../src/assets/images/add-new.svg";
import Button from "../../UI/Button";

const Form = () => {

  const [userData, setUserData] = useState(
    {
name:"",
surname: "",
tel:""
  }
);

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(userData);
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