import Profile from "../components/profile/Profile";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  model: state.Store,
});

export default connect(mapStateToProps)(Profile);
