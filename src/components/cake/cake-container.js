import React from "react";
import { connect } from "react-redux";
import buyCake from "../../redux/cake-reducer/action";

function CakeContainer({ cake, buyCake }) {
  return (
    <div>
      <h1>Number of cake = {cake}</h1>
      <button onClick={buyCake}>Buy Cake</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
