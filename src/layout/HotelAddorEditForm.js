import React from "react";
import { ReactDOM } from "react";
import { Component } from "react";
import "../assets/Styles/HotelAddorEditForm.css";
import { connect } from "react-redux";
import HotelAddHandler from "../handler/HotelAddHandler";
import HotelEditHandler from "../handler/HotelEditHandler";
import NavBar from "../core/NavBar";
import { addHotel, editHotel } from "../redux/actions/HotelActions";
import { showModal } from "../redux/actions/AlertActions";
import { withRouter } from "react-router-dom";
class HotelAddorEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalcontent: "",
    };
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleClose = () => {
    this.setState({ showModal: false });
  };
  handleCancel(e) {
    e.preventDefault();
    console.log("inside handle cancel");
    this.props.history.push("/hotels");
  }
  addHotelHandler = (e) => {
    e.preventDefault();
    console.log("inside addHotelHandler");
    let highestId = 0;
    if (this.props.hotels.length > 0) {
      highestId = Math.max(...this.props.hotels.map((hotel) => hotel.id));
    }
    const newHotel = {
      name: this.nameInput.value,
      location: this.locationInput.value,
      phone: this.phoneInput.value,
      email: this.emailInput.value,
      rating: this.ratingInput.value,
      petfriendly: this.petfriendlyInput.checked,
    };
    let hotels = [];

   
    HotelAddHandler(newHotel, hotels, this.props.addHotel);

    this.setState({ showModal: true });
  };

  updateHotelHandler = (e) => {

    const hotelToUpdate = this.props.location.state.hotel;
    const updatedHotel = {
      id: hotelToUpdate.id,
      name: this.nameInput.value,
      location: this.locationInput.value,
      phone: this.phoneInput.value,
      email: this.emailInput.value,
      rating: this.ratingInput.value,
      petfriendly: this.petfriendlyInput.checked,
    };
    console.log("petfriendly"+updatedHotel.petfriendly);
    HotelEditHandler(
       hotelToUpdate.id,
       updatedHotel,
      this.props.editHotel
    );
    this.props.history.push({
      pathname: `/hotels`,
      state: {
        showModal: true,
        modalcontent: (
          <div>
            <h2>Success!</h2>Updated Successfully
          </div>
        ),
      },
    });
    
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("inside componentDidUpdate");

    
    if (prevProps.hotels !== this.props.hotels) {
     
      this.props.history.push({
        pathname: `/hotels`,
        state: {
          showModal: true,
          modalcontent: (
            <div>
              <h2>Success!</h2>Added Successfully
            </div>
          ),
        },
      });
    }
  }

  render() {
    let hotel;
    let buttonText = "ADD";
    let buttonHandler = this.addHotelHandler;

    if (this.props.location.state && this.props.location.state.hotel) {
      hotel = this.props.location.state.hotel;
      buttonText = "UPDATE";
      buttonHandler = this.updateHotelHandler;
    }

    return (
      <div>
        <NavBar />
        <div className="contain">
          <form className="addform">
            {/* <input
            className="input"
            type="text"
            name="id"
            ref={(input) => (this.idInput = input)} */}
            {/* ></input> */}
            Hotel Name
            <input
              className="input"
              type="text"
              name="name"
              ref={(input) => (this.nameInput = input)}
              defaultValue={hotel && hotel.name}
            ></input>
            <br />
            Location
            <input
              className="input"
              type="text"
              name="location"
              ref={(input) => (this.locationInput = input)}
              defaultValue={hotel && hotel.location}
            ></input>
            <br />
            Contact Number
            <input
              className="input"
              type="text"
              name="phone"
              ref={(input) => (this.phoneInput = input)}
              defaultValue={hotel && hotel.phone}
            ></input>
            <br />
            Email ID
            <input
              className="input"
              type="text"
              name="email"
              ref={(input) => (this.emailInput = input)}
              defaultValue={hotel && hotel.email}
            ></input>
            <br />
            Rating
            <input
              className="input"
              type="number"
              name="rating"
              ref={(input) => (this.ratingInput = input)}
              defaultValue={hotel && hotel.rating}
            ></input>
            <br />
            <input
              type="checkbox"
              name="petfriendly"
              value="yes"
              ref={(input) => (this.petfriendlyInput = input)}
              defaultChecked={hotel && hotel.petfriendly}
            />
            <label className="inline-label"> Pet Friendly</label>
            <br />
            <br />
            <div className="btn-container">
              <button className="btns" onClick={this.handleCancel}>
                Cancel
              </button>
              <button className="addbtn" onClick={buttonHandler.bind(this)}>
                {buttonText}
              </button>
            </div>
          </form>
          {/* <Modal show={this.state.showModal} handleClose={this.handleClose}>
            Hotel Added Successfully!
          </Modal> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    hotels: state.hotelList.hotels,
    // Access the list of hotels in the Redux store
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addHotel: (Hotels) => dispatch(addHotel(Hotels)),
    showModal: (message) => dispatch(showModal(message)),
    editHotel: (Hotels) => dispatch(editHotel(Hotels)),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HotelAddorEditForm)
);
