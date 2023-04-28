//Action creator for adding a hotel
export const addHotel = (Hotels) => {
  console.log("inside addhotelaction");

  return {
    type: "ADD_HOTEL",
    payload: Hotels,
  };
};
export const editHotel = (Hotels) => {
  console.log("inside edithotelaction");

  return {
    type: "EDIT_HOTEL",
    payload: Hotels,
  };
};
export const deleteHotel = (Hotels) => {
  console.log("inside deletehotelaction" + Hotels);
  return {
    type: "DELETE_HOTEL",
    payload: Hotels,
  };
};
export const getHoteLlist = (Hotels) => {
  console.log("inside getHotelListhotelaction" + Hotels);
  return {
    type: "GET_HOTELS",
    payload: Hotels,
  };
};
