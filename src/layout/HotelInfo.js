import { Component } from "react";
import "../assets/Styles/HotelInfo.css";
import NavBar from "../core/NavBar";
import { HotelCustomersList,HotelRoomsList } from "../utils/HttpUtils";
class HotelInfo extends Component {
  constructor(props){
    super(props);
    const { hotel } = this.props.location.state;
    this.state = {
      hotel: hotel
    };
  
  }
 async componentDidMount(){
  const customersList=await HotelCustomersList(this.state.hotel.id);
  const roomsList=await HotelRoomsList(this.state.hotel.id);
  const customerslength=customersList.length;
  const roomslength=roomsList.length;
  this.setState({customerslength,roomslength});
   
  console.log("hotel"+this.state.hotel);

  }
   render() {
   
    
  
    return (
      <div>
        <NavBar />
        <div className="hotelinfo">
          <h3 className="Heading">General Info</h3>
          <table>
            <tbody>
              <tr>
                <td className="label">Name </td>
                <td className="value">{this.state.hotel.name}</td>
              </tr>
              <tr>
                <td className="label">Location</td>
                <td className="value">{this.state.hotel.location}</td>
              </tr>
              <tr>
                <td className="label">Phone</td>
                <td className="value">{this.state.hotel.phone}</td>
              </tr>
              <tr>
                <td className="label">Email</td>
                <td className="value">{this.state.hotel.email}</td>
              </tr>
              <tr>
                <td className="label">Rating</td>
                <td className="value">{this.state.hotel.rating}</td>
              </tr>
              <tr>
                <td className="label">Pet Friendly</td>
                <td className="value">{this.state.hotel.petfriendly}</td>
              </tr>
            </tbody>
          </table>

          <h3 className="Heading">Other Info</h3>
          <table>
            <tbody>
              <tr>
                <td className="label">
                  <a href= {`#/hotels/${this.state.hotel.id}/customers` }>Customers</a>
                </td>
                <td className="value">{this.state.customerslength}</td>
              </tr>
              <tr>
                <td className="label">
                  <a href="#">Rooms</a>
                </td>
                <td className="value">70</td>
              </tr>
              <tr>
                <td className="label">
                  <a href="#">Employees</a>
                </td>
                <td className="value">500</td>
              </tr>
              <tr>
                <td className="label">
                  <a href="#">Services</a>
                </td>
                <td className="value">20</td>
              </tr>
              <tr>
                <td className="label">
                  <a href="#">Bookings</a>
                </td>
                <td className="value">700</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default HotelInfo;
