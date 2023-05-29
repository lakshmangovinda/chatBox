import Home from "../components/home/Home";
import { connect } from "react-redux";
import { addUserstoStore, addUsertoStore } from "../services/action/Action";

const mapStateToProps = (state) => ({
  model: state.Store,
});

const mapDispatchtoProps = (dispatch) => ({
  addUsertoStoreHandler: (data) => {
    dispatch(addUserstoStore(data));
  },
  addUsertoStore: (data) => {
    dispatch(addUsertoStore(data));
  },
});

export default connect(mapStateToProps, mapDispatchtoProps)(Home);
