import React from "react";
import "../assets/Styles/Modal.css";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={props.handleClose}>
      <div
        className={
          props.action === "DELETE" ? "modal-contenta" : "modal-content"
        }
      >
        {props.action !== "DELETED" && (
          <div>
            <div className="modaltext">{props.modalcontent}</div>
          </div>
        )}
        {props.action == "DELETED" && (
          <div>
            <div className="modaltext">{props.modalcontent}</div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Modal;
