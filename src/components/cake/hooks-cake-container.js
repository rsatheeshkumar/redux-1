import React from "react";
import { useSelector, useDispatch } from "react-redux";
import buyCake from "../../redux/cake-reducer/action";

function NewCakeContainer() {
  const cake = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        using hooks useSelctor and useDispatch <b>Below</b>
      </p>
      <h1>Number of new cake = {cake}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy num Cake</button>
    </div>
  );
}

export default NewCakeContainer;
