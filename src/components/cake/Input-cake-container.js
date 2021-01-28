import React, { useState } from "react";
import { connect } from "react-redux";
import buyCake from "../../redux/cake-reducer/action";

function InputCakeContainer({ cake, buyCake }) {
  const [number, setNumber] = useState(1);
  const handleClick = () => {
    buyCake(number);
  };
  return (
    <div>
      <p>Using Input pass the number by user input</p>
      <h1>Input Number of cake = {cake}</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleClick}>Buy {number} of Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cake: state.cake.numberOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputCakeContainer);
