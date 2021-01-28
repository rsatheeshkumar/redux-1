import { BUY_CAKE } from "./types";

const buyCake = (number = 1) => ({
  type: BUY_CAKE,
  payload: number,
});

export default buyCake;
