import ReactDataGrid from "react-data-grid";
import { deleteHotel,getHoteLlist } from "../redux/actions/HotelActions";
import Search from "../core/Search";
import "../assets/Styles/HotelList.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavBar from "../core/NavBar";
import Modal from "../core/Modal";
import HotelDeleteHandler from "../handler/HotelDeleteHandler";
import { getHotels } from "../utils/HttpUtils";
import { filterHotels } from "../handler/SearchHandler";
import {
  AddButton,
  DeleteButton,
  ViewButton,
  EditButton,
} from "../core/Button";
import { HotelColumns } from "../utils/columns";

class HotelList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelList:this.props.hotels,

      location: {
        pathname: "/",
      },
      showModal: false,
      modalcontent: "",
      deleteHotel: this.props.deleteHotel,
      searchTerm: "",
      filteredHotelList: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  rowGetter = (i) => {
    const row =
      this.state.filteredHotelList.length !== 0
        ? this.state.filteredHotelList[i]
        : this.state.hotelList[i];

    const hotelId = row.id;

    return {
      ...row,
      actions: (
        <div className="icons">
          <ViewButton onClick={() => this.viewHandler(row)} />
          <EditButton onClick={() => this.editHandler(row)} />
          <DeleteButton
            onClick={() => {
              this.deleteHandler(hotelId);
            }}
          />
        </div>
      ),
    };
  };
  handleSearchChange = (e) => {
    console.log(e.target.value);
    this.setState({ searchTerm: e.target.value });
    this.setState({
      filteredHotelList: filterHotels(this.state.hotelList, e.target.value),
    });
  };

  async componentDidMount() {
    console.log("inside component did mount");
    const hotelsList = await getHotels();
    this.setState({ hotelList: hotelsList });
    this.props.getHoteLlist(hotelsList);
    console.log(hotelsList);
    console.log("in didmount" + this.props.location.state);
    {
      this.props.location.state && this.props.location.state.showModal
        ? this.setState({
            showModal: this.props.location.state.showModal,
            modalcontent: this.props.location.state.modalcontent,
          })
        : console.log("error");
    }
  }

  

  formatter = (row) => {
    return row.actions;
  };

  //Function for displaying add form
  addButtonClick() {
    console.log("inside handlebutton click");
    this.props.history.push("/hoteladdoredit");
  }
  //Function for handling delete
  deleteHandler(hotelId) {
    const hotelsList = this.state.hotelList;

    this.setState({
      showModal: true,
      action: "DELETE",
      modalcontent: (
        <div>
          <h2>Are you sure?</h2>
          Do you Want to Delete?
          <div className="confirm">
            <button className="confirmbtn" onClick={() => this.handleClose()}>
              No
            </button>
            <button
              className="confirmbtn"
              onClick={() => {
                this.handleDelete(this.state.selectedId);
              }}
            >
              Yes
            </button>
          </div>
        </div>
      ),

      selectedId: hotelId,
      hotelsList: this.state.hotelList,
      deleteHotel: this.state.deleteHotel,
    });
  }

  handleDelete(hotelId) {
    console.log("inside delete handler in hotellist");
    HotelDeleteHandler( hotelId, this.props.deleteHotel);
    this.setState({ action: "DELETED" });
  }
  //function for view one hotel details
  viewHandler(hotel) {
    this.props.history.push({
      pathname: `/hotelinfo/${hotel.id}`,
      state: { hotel },
    });
  }
  //function for view one hotel details
  editHandler(hotel) {
    this.props.history.push({
      pathname: `/hoteladdoredit/${hotel.name}`,
      state: { hotel },
    });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("inside component did update");
    if (prevProps.hotels !== this.props.hotels) {
      console.log("this.props.hotels"+this.props.hotels);
      this.setState({hotelList:this.props.hotels})
      if (this.state.action == "DELETED")
        this.setState({
          showModal: "true",
          modalcontent: (
            <div>
              <h2>Success!</h2>Deleted Successfully
            </div>
          ),
        });
        this.props.history.push("/hotels");
      console.log("HotelList :" + this.state.hotelList);
    }
  }

  handleClose = () => {
    this.setState({ showModal: false });
  };
  render() {
    console.log("Inside Render:Hotel List" + this.state.hotelList);

    return (
      <div className="gridcontainer">
        <NavBar />
        <Modal
          show={this.state.showModal}
          handleClose={this.handleClose}
          modalcontent={this.state.modalcontent}
          action={this.state.action}
        ></Modal>

        {this.state.hotelList.length ? (
          <div className="screen">
            <br />
            <br />
            {this.state.hotelList.length} Hotels
            <Search handleSearchChange={this.handleSearchChange} />
            <br />
            <br />
            <ReactDataGrid
              columns={HotelColumns(this.formatter)}
              rowGetter={this.rowGetter}
              //  rowsCount={this.state.hotelList.length}
              rowsCount={
                this.state.filteredHotelList.length != 0
                  ? this.state.filteredHotelList.length
                  : this.state.hotelList.length
              }
            ></ReactDataGrid>
          </div>
        ) : (
          <div className="listempty">
            <p>
              There is no Hotel Added.
              <br />
              Click on '+' to Add
            </p>
          </div>
        )}
        <div className="overlay">
          <AddButton
            onClick={() => {
              this.props.history.push("/hoteladdoredit");
            }}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  hotels: state.hotelList.hotels,
});
const mapDispatchToProps = (dispatch) => {
  return {
    deleteHotel: (Hotels) => dispatch(deleteHotel(Hotels)),
    getHoteLlist:(hotelsList)=>dispatch(getHoteLlist(hotelsList))
  };
};

// Connect the component to the Redux store
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HotelList)
);
