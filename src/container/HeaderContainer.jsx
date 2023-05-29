import { connect } from "react-redux";
import Header from "../components/header/Header";
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

export default connect(mapStateToProps, mapDispatchtoProps)(Header);
