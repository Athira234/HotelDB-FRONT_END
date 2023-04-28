import HotelAddorEditForm from "./layout/HotelAddorEditForm";
import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { HashRouter, Route } from "react-router-dom";
import Login from "../src/layout/Login";
import HotelList from "./layout/HotelList";
import HotelInfo from "./layout/HotelInfo";
import  HotelCustomers  from "./layout/HotelCustomers";
function App() {
  console.log("inside app component");
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          {/* <Login /> */} <Route exact path="/" component={Login} />
          <Route exact path="/hotels" component={HotelList} />
          <Route path="/hoteladdoredit" component={HotelAddorEditForm} />
          <Route path="/hotelinfo/:id" component={HotelInfo} />
          <Route path="/hotels/:id/customers" component={HotelCustomers} />
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
