import { customerColumns } from "../utils/columns";
import ReactDataGrid from "react-data-grid";
import React from "react";
import Search from "../core/Search";
import { HotelCustomersList } from "../utils/HttpUtils";
import NavBar from "../core/NavBar";
import '../assets/Styles/HotelCustomers.css';
import { withRouter } from "react-router-dom";
 class HotelCustomers extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
          customers:[],
        }
     
    }
      async componentDidMount()
      {
        console.log("inside comonent did mount");
        const hotelId = this.props.match.params.id;
        console.log(hotelId);
        const customersList=await HotelCustomersList(hotelId);
        this.setState({customers:customersList});
        console.log("customers in hotelcustomers"+customersList);
      }
      
    
    render()
    {
      const rowGetter = (i) => {
        const row =this.state.customers[i];
      return row;}
          
        console.log("inside hotelcustomers"+this.state.customers);
        return(
          <div>
            <NavBar />
            <div className="screen">
            <br />
            <br />
            {this.state.customers.length} Customers
            <Search handleSearchChange={this.handleSearchChange} />
            <br />
            <br />
            <ReactDataGrid
              columns={customerColumns()}
              rowGetter={rowGetter}
              rowsCount={this.state.customers.length}></ReactDataGrid>
              </div></div>

        )

    }
}
export default withRouter(HotelCustomers);