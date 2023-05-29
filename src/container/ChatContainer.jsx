import { connect } from "react-redux";
import Chat from "../components/chat/Chat";
import { addChatData } from "../services/action/Action";

const mapStateToProps = (state) => ({
  chatData: state.Store,
});

const mapDispatchtoProps = (dispatch) => ({
  addChat: (data) => {
    dispatch(addChatData(data));
  },
});

export default connect(mapStateToProps, mapDispatchtoProps)(Chat);
