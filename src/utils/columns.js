export function HotelColumns({ formatter }) {
  return [
    {
      key: "id",
      name: "",
      hidden: true,
      width: 10,
    },
    {
      key: "name",
      name: "Name",
      width: 300,
    },
    {
      key: "location",
      name: "Location",
      width: 150,
    },
    {
      key: "phone",
      name: "Phone",
      width: 200,
    },
    {
      key: "email",
      name: "Email",
      width: 330,
    },
    {
      key: "rating",
      name: "Rating",
      width: 150,
    },
    {
      key: "petfriendly",
      name: "Pet-Friendly",
      width: 150,
    },
    {
      key: "actions",
      name: "Actions",
      width: 450,
      formatter: formatter,
    },
  ];
}

export function customerColumns() {
  return [
    { key: "id", name: "Customer ID" },
    { key: "name", name: "Customer Name" },
    { key: "address", name: "Customer Address" },
    { key: "phone", name: "Customer Phone" },
    { key: "email", name: "Customer Email" },
    { key: "preferences", name: "Preferences" },
    { key: "special_needs", name: "Special Needs" },
  ];
}
export function roomColumns() {
  return [
  
      { key: 'room_id', name: 'Room ID', sortable: true },
      { key: 'room_type', name: 'Room Type', sortable: true },
      { key: 'room_price', name: 'Room Price', sortable: true },
      { key: 'room_no', name: 'Room Number', sortable: true },
      { key: 'floor_no', name: 'Floor Number', sortable: true },
      { key: 'area_of_room', name: 'Area of Room', sortable: true },
      { key: 'occupancy_details', name: 'Occupancy Details', sortable: true },
    
    
  ];
}
