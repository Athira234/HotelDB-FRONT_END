import { getHotels } from "../../utils/HttpUtils";



const initialState = {
  hotels:[],
};

export const HotelListReducer = (state = initialState, action) => {
  console.log("Inside HotelListReducer");

  switch (action.type) {
    case "ADD_HOTEL": {
      console.log("inside add reducer function hotlList" + action.payload);
      return {
        hotels: action.payload,
      };
    }
    case "EDIT_HOTEL": {
      console.log("inside edit reducer function hotlList" + action.payload);
      return {
        hotels: action.payload,
      };
    }
    case "DELETE_HOTEL": {
      console.log("inside delete reducer function hotlList" + action.payload);

      return {
        hotels: action.payload,
      };
    }
    case "GET_HOTELS": {
      console.log("inside GetHotels reducer function hotlList" + action.payload);

      return {
        hotels: action.payload,
      };
    }
    default:
      return state;
  }
};

export default HotelListReducer;
