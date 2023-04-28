import { createStore } from "redux";

import RootReducer from "../redux/Reducers/RootReducer";
const store = createStore(RootReducer);

export default store;
