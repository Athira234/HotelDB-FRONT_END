import React from "react";
import Navbar from "../core/NavBar";
import HotelList from "./HotelList";
import "../assets/Styles/Home.css";
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("home component mounted");
  }

  render() {
    return (
      <div className="home">
        <Navbar />
        <HotelList />
      </div>
    );
  }
}
export default Home;
