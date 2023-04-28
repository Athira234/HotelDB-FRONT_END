import { getHotels, updateHotel } from "../utils/HttpUtils";
async function HotelEditHandler(hotelId, updatedHotel, editHotel) {

  console.log("Inside edit handler");
  const hotel = {
    "hotel_name": updatedHotel.name,
    "hotel_location": updatedHotel.location,
    "hotel_phone": updatedHotel.phone,
    "hotel_email":updatedHotel.email,
    "hotel_rating":updatedHotel.rating,
    "pet_friendly":updatedHotel.petfriendly,
  };
  console.log("petfriendly in handler"+updatedHotel.petfriendly);
   await updateHotel(hotelId,hotel);
  const hotels=await getHotels();
  console.log(hotels);
  editHotel(hotels);
}
export default HotelEditHandler;
