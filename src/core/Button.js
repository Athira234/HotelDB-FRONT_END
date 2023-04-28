import React from "react";
import "../assets/Styles/Button.css";
import addIcon from "../assets/icons8-plus-math-48.png";
import viewIcon from "../assets/view1.png";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";

export const Button = ({ label }) => {
  return (
    <button type="submit" className="loginbutton">
      {label}
    </button>
  );
};
export const AddButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn2">
      <img className="img" src={addIcon} />
    </button>
  );
};

export const EditButton = ({ onClick }) => {
  return (
    <button className="btn1" onClick={onClick}>
      <img className="img1" src={editIcon} />
    </button>
  );
};

export const ViewButton = ({ onClick }) => {
  return (
    <button className="btn1" onClick={onClick}>
      <img className="img2" src={viewIcon} />
    </button>
  );
};
export const DeleteButton = ({ onClick }) => {
  return (
    <button className="btn1" onClick={onClick}>
      <img className="img1" src={deleteIcon} />
    </button>
  );
};
