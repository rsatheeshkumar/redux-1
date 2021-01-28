import { combineReducers } from "redux";
import cakeReducer from "./cake-reducer/reducer";
import iceCreamReducer from "./icecream-reducer/reducer";
import userReducer from "./userReducer/reducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

export default rootReducer;
