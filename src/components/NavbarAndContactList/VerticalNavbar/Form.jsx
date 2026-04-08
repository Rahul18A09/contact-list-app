import React from "react";
import "./Form.css";
import addnewImage from "../../../../src/assets/images/add-new.svg";
import Button from '../../UI/Button';

const Form = () => {
  return (
    <form className="form">
      <div className="add-new-img">
        <img src={addnewImage} alt="" />
      </div>

      <div className="input-text">
        <input type="text" placeholder="name" />
        <input type="text" placeholder="surname" />
      </div>

      <div className="input-tel">
        <input type="text" placeholder="9997778880"/>
      </div>

      <Button name= 'Add'/>
    </form>
  );
};

export default Form;
