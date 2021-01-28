import { BUY_ICECREAM } from "./types";

const buyIceCream = (number = 2) => ({
  type: BUY_ICECREAM,
  payload: number,
});

export default buyIceCream;
