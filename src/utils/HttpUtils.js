import axios from "axios";
export async function getHotels() {
  console.log("inside getHotels");
  const response = await axios.get(
    "http://localhost:8080/hotelbookingsystem/hotels"
  );
  const data = response.data;
  const hotels = [];
  data.forEach((hotel) => {
    hotels.push({
      id: hotel.hotel_id,
      name: hotel.hotel_name,
      location: hotel.hotel_location,
      phone: hotel.hotel_phone,
      email: hotel.hotel_email,
      rating: hotel.hotel_rating,
      petfriendly: hotel.pet_friendly === true ? "Yes" : "No",
    });
  });
  console.log("Fetched data" + hotels);
  return hotels;
}
export async function postHotels(hotel) {
  console.log("inside postHotels");
  const response = await axios.post(
    "http://localhost:8080/hotelbookingsystem/hotels",
    hotel
  );
  const data = response.data;

  console.log("Fetched data" + data);
  return hotel;
}
export async function updateHotel(hotel_id,hotel) {
  console.log("inside updateHotel");
  console.log("Petfriendly"+hotel.pet_friendly);
  const response = await axios.put(`http://localhost:8080/hotelbookingsystem/hotels/${hotel_id}`,hotel
    
  );
  const data = response.data;

  console.log("Fetched data" + data);
  return hotel;
}

export async function removeHotel(hotel_id) {
  console.log("inside removeHotel");
  
  const response = await axios.delete(
    `http://localhost:8080/hotelbookingsystem/hotels/${hotel_id}`
    
  );
  const data = response.data;

  console.log("Fetched data" + data);
  return data;
}
export async function HotelCustomersList(hotel_id)
{
  const response = await axios.get(
    `http://localhost:8080/hotelbookingsystem/hotels/${hotel_id}/customers`
    
  );
  
  const data=response.data;
  const customers=[];
  data.forEach((customer) => {
    customers.push({
      id: customer.customer_id,
      name: customer.customer_name,
      phone: customer.customer_phone,
      email: customer.customer_email,
      address: customer.customer_address,
      preferences: customer.preferences,
      special_needs: customer.specialneeds,
    });
  });

  console.log("customers"+customers);
  return customers;

}


export async function HotelRoomsList(hotel_id)
{
  const response = await axios.get(
    `http://localhost:8080/hotelbookingsystem/hotels/${hotel_id}/rooms`
    
  );
  
  const data=response.data;
  const rooms=[];
  data.forEach((room) => {
    rooms.push({
      room_id:room.room_id,
      room_type:room.room_type,
      room_price:room.room_price,
      room_no:room.room_no,
     floor_no:room.floor_no,
      area_of_room:room.area_of_room,
      occupancy_details:room.occupancy_details,
    });
  });

  console.log("rooms"+rooms);
  return rooms;

}