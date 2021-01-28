import "./App.css";
import UserContainer from "./components/user/user-container";
import CakeContainer from "./components/cake/cake-container.js";
import IceCreamContainer from "./components/icecream/iceCream-container";
import NewCakeContainer from "./components/cake/hooks-cake-container";
import InputCakeContainer from "./components/cake/Input-cake-container";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <CakeContainer />
        <NewCakeContainer />
        <IceCreamContainer />
        <InputCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
