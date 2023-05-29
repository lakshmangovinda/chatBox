import "bootstrap/dist/css/bootstrap.css";
import "leaflet/dist/leaflet.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as creatstore } from "redux";
import rootreducer from "./services/reducer/rootreducer";
import React from "react";
import HomeContainer from "./container/HomeContainer";
const store = creatstore(rootreducer);

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <HomeContainer />
        </Provider>
      </Router>
    </React.StrictMode>
  );
};

export default App;
