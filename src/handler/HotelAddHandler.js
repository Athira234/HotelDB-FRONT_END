import { getHotels, postHotels } from "../utils/HttpUtils";
async function HotelAddHandler(hotel, hotels, addHotel) {
  console.log("inside hotelAddHandler");
  console.log("email of hotel"+hotel.email);
  const newHotel = {
    "hotel_name": hotel.name,
    "hotel_location": hotel.location,
    "hotel_phone": hotel.phone,
    "hotel_email":hotel.email,
    "hotel_rating": hotel.rating,
    "pet_friendly": hotel.petfriendly,
  };

  await postHotels(newHotel);

  //console.log(newHotel);
  const hotelsList = await getHotels();
  console.log(hotelsList);
  addHotel(hotelsList);
}

export default HotelAddHandler;
