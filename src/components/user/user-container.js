import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRequest } from "../../redux/userReducer/action";

function UserContainer({ fetchRequest, user }) {
  console.log(user);
  useEffect(() => {
    fetchRequest();
  }, []);
  return (
    <div>
      <ul>
        {user.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRequest: () => dispatch(fetchRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
