import { BUY_ICECREAM } from "./types";

const INITIAL_STATE = {
  numberOfIceCreams: 20,
};

const iceCreamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - action.payload,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
