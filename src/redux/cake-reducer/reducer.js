import { BUY_CAKE } from "./types";

const INITIAL_STATE = {
  numberOfCakes: 10,
};

const cakeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };

    default:
      return state;
  }
};

export default cakeReducer;
