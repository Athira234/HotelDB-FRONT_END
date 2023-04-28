import { getHotels, removeHotel } from "../utils/HttpUtils";
async function HotelDeleteHandler(hotelId, deleteHotel) {
  console.log("inside HotelDeleteHandler");
  console.log(hotelId);
  await removeHotel(hotelId);
 const hotelsList = await getHotels();
 
  console.log(hotelsList);
  deleteHotel(hotelsList);
  
}

export default HotelDeleteHandler;
