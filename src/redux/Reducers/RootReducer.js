import { combineReducers } from "redux";
import HotelListReducer from "./HotelListReducer";
import LoginReducer from "./LoginReducer";
import AlertReducer from "./AlertReducer";
const RootReducer = combineReducers({
  login: LoginReducer,
  hotelList: HotelListReducer,
  alert: AlertReducer,
});
export default RootReducer;
