import React from "react";
import { connect } from "react-redux";
import buyIceCream from "../../redux/icecream-reducer/action";

function IceCreamContainer({ iceCream, buyIce }) {
  return (
    <div>
      <h1>Buy Ice Cream = {iceCream}</h1>
      <button onClick={buyIce}>Buy Ice Cream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    iceCream: state.iceCream.numberOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIce: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
