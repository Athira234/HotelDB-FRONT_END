import React from "react";
import "../assets/Styles/NavBar.css";
import LogoutIcon from "../core/Icon";
import arrow from "../assets/arrow1.png";
import { connect } from "react-redux";
import LogoutHandler from "../handler/LogoutHandler";
const mapStateToProps = (state) => ({
  hotels: state.hotelList.hotels,
});
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: window.location.hash,
    };
  }

  componentDidMount() {
    //console.log(this.state.url);
    this.handleLocationChange = () => {
      this.setState({ url: window.location.hash });
    };
    const hotels = this.props.hotels;
    console.log("changed url:" + this.state.url);
    console.log(this.state.url.split("/")[1]);
    if (this.state.url.split("/")[1] == "hoteladdoredit") {
      const name = this.state.url.split("/")[2];
      if (name) {
        const hotel = hotels.find((hotel) => hotel.name === name);
        this.setState({ hotel });
      }
    }
    const id = this.state.url.split("/")[2];
    const hotelid = parseInt(id);
    console.log("Id received" + id);
    console.log(this.props.hotels);

    if (hotelid) {
      const hotel = hotels.find((hotel) => hotel.id === hotelid);
      this.setState({ hotel });
    }
    window.addEventListener("popstate", this.handleLocationChange);
  }

  componentWillUnmount() {
    window.removeEventListener("popstate", this.handleLocationChange);
    console.log("changed url:" + this.state.url);
  }

  render() {
    if (this.state.hotel) console.log(this.state.hotel.name);
    let content = [
      <div key="1" className="link">
        <a className="content" style={{ marginRight: "10px" }} href="#/hotels">
          Hotels
        </a>
        {this.state.url === "#/hoteladdoredit" && (
          <a className="content_a" href="#/hoteladdoredit">
            <img src={arrow} className="arrow"></img>
            New Hotel
          </a>
        )}
        {this.state.hotel &&
          this.state.hotel.id &&
          this.state.url === "#/hotelinfo/" + this.state.hotel.id && (
            <a
              className="content_a"
              href={`#/hotelinfo/${this.state.hotel.id}`}
            >
              <img src={arrow} className="arrow"></img>
              {this.state.hotel.name}
            </a>
          )}
        {this.state.hotel &&
          this.state.hotel.name &&
          this.state.url === "#/hoteladdoredit/" + this.state.hotel.name && (
            <a
              className="content_a"
              href={`#/hoteladdoredit/${this.state.hotel.name}`}
            >
              <img src={arrow} className="arrow"></img>
              {this.state.hotel.name}
            </a>
          )}
           {this.state.hotel &&
          this.state.hotel.name &&
          this.state.url === "#/hotels/" + this.state.hotel.id +"/customers" && (
            <a
              className="content_a"
              href={`#/hoteladdoredit/${this.state.hotel.name}`}
            >
              <img src={arrow} className="arrow"></img>
              {this.state.hotel.name}<img src={arrow} className="arrow"></img>Customers
            </a>
          )}
      </div>,
    ];

    return (
      <div className="nav">
        <div className="links">
          {content}
          <a className="nav-item-right" href="#">
            <LogoutIcon onClick={LogoutHandler} />
          </a>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NavBar);
