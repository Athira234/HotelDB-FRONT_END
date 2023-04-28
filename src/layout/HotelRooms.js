import { roomColumns } from "../utils/columns";
import ReactDataGrid from "react-data-grid";
import React from "react";
import Search from "../core/Search";
import { HotelRoomsList } from "../utils/HttpUtils";
import NavBar from "../core/NavBar";
import '../assets/Styles/HotelCustomers.css';
import { withRouter } from "react-router-dom";
 class HotelRooms extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
          rooms:[],
        }
     
    }
      async componentDidMount()
      {
        console.log("inside comonent did mount");
        const hotelId = this.props.match.params.id;
        console.log(hotelId);
        const roomsList=await HotelRoomsList(hotelId);
        this.setState({customers:customersList});
        console.log("customers in hotelcustomers"+customersList);
      }
      
    
    render()
    {
      const rowGetter = (i) => {
        const row =this.state.rooms[i];
      return row;}
          
        console.log("inside hotelrooms"+this.state.rooms);
        return(
          <div>
            <NavBar />
            <div className="screen">
            <br />
            <br />
            {this.state.rooms.length} Rooms
            <Search handleSearchChange={this.handleSearchChange} />
            <br />
            <br />
            <ReactDataGrid
              columns={roomColumns()}
              rowGetter={rowGetter}
              rowsCount={this.state.rooms.length}></ReactDataGrid>
              </div></div>

        )

    }
}
export default withRouter(HotelRooms);