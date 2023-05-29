import { useState } from "react";
import { Image, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import "./chat.css";
const Chatbox = styled.div`
  width: 500px;
  background: #3e5dbc;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 0px;
`;
const Wrapper = styled.div`
  .icon {
    cursor: pointer;
  }
  .chat_box {
    background: #fff;
    width: 350px;
    height: 400px;
    position: fixed;
    bottom: -420px;
    right: 60px;
    transition: all 0.3s;
    border: 1px solid transparent;
    border-radius: 3px 3px 0 0;
    -webkit-box-shadow: rgba(0, 0, 0, 0.0980392) 0 0 1px 2px;
    -moz-box-shadow: rgba(0, 0, 0, 0.0980392) 0 0 1px 2px;
    box-shadow: rgba(0, 0, 0, 0.0980392) 0 0 1px 2px;
    overflow: hidden;
    z-index: 1000000;
  }
  .chat_box2 {
    background: #fff;
    width: 350px;
    height: 400px;
    position: fixed;
    bottom: -420px;
    right: 600px;
    transition: all 0.3s;
    border: 1px solid transparent;
    border-radius: 3px 3px 0 0;
    -webkit-box-shadow: rgba(0, 0, 0, 0.0980392) 0 0 1px 2px;
    -moz-box-shadow: rgba(0, 0, 0, 0.0980392) 0 0 1px 2px;
    box-shadow: rgba(0, 0, 0, 0.0980392) 0 0 1px 2px;
    overflow: hidden;
    z-index: 1000000;
  }

  .list {
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    justify-content: center;
    cursor: pointer;
  }
  .pesan_chat {
    text-decoration: none;
    display: block;
    height: 100%;
    padding: 5px 5px 15px;
    overflow-y: scroll;
    overflow-x: none;
  }

  .chat_button {
    background: #3e5dbc;
    border: 0;
    margin: 0 auto;
    padding: 5px 18px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    display: inline-block;
    border-radius: 3px;
    transition: all 0.3s;
    text-decoration: none;
  }

  .chat_button:hover {
    background: #4677d3;
  }
  .chatwindow {
    margin: 0 auto;
    padding: 10px;
    height: 50px;
    line-height: 35px;
    font-size: 18px;
    font-weight: 700;
    color: white;

    display: flex;
    flex-direction: row;

    width: 100%;
  }

  .chatheader {
    margin: 0 auto;
    padding: 10px;
    height: 50px;
    line-height: 35px;
    font-size: 18px;
    font-weight: 700;
    color: white;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    cursor: pointer;
  }

  .pesan_chat p {
    color: #616161;
    font-size: 16px;
    margin: 10px;
  }

  .message-input {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 99;
    border-top: 1px solid;
  }

  .message-input .wrap {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .message-input .wrap input {
    font-family: "proxima-nova", "Source Sans Pro", sans-serif;
    float: left;
    border: none;
    width: calc(100% - 90px);
    padding: 11px 32px 10px 8px;
    font-size: 0.8em;
    color: #32465a;
  }

  .messages {
    height: auto;
    min-height: calc(100% - 93px);
    max-height: calc(100% - 93px);
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }

  .messages ul {
    display: flex;
    flex-direction: column;
  }

  .messages ul li {
    display: flex;
    clear: both;
    justify-content: start;
    gap: 1em;
    align-items: center;
    width: calc(100% - 25px);
    font-size: 0.9em;
  }

  .messages ul li.received {
    justify-content: flex-start;
    display: flex;
    flex-direction: row-reverse;
  }

  .messages ul li:nth-last-child(1) {
    margin-bottom: 20px;
  }

  .messages ul li.sent p {
    background: #435f7a;
    color: #f5f5f5;
  }

  .messages ul li.received p {
    background: #f5f5f5;
    float: right;
  }

  .messages ul li img {
    width: 22px;
    height: 22px;
    border-radius: 50%;
  }
  .messages ul li p {
    display: inline-block;
    padding: 8px 8px;
    border-radius: 20px;
    max-width: 205px;
    line-height: 100%;
  }
`;

const Chat = (props) => {
  const currentUser = props.currentUser;
  const [isHidden, setIsHidden] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedUser, setselectedUser] = useState([]);
  console.log(props.chatData.chatData);
  const messagedata = props.chatData.chatData.find((res) => {
    return res.userId === currentUser.id;
  });
  console.log(messagedata);
  const [inputmessage, setInputmessage] = useState();

  const handleEnter = (event) => {
    setInputmessage("");
    props.addChat({
      userId: currentUser.id,
      messages: [
        {
          type: "sent",
          message: inputmessage,
          userId: selectedUser.id,
        },
      ],
    });
    props.addChat({
      userId: selectedUser.id,
      messages: [
        {
          type: "received",
          message: inputmessage,
          userId: currentUser.id,
        },
      ],
    });
  };
  const handleOnchange = (event) => {
    setInputmessage(event.target.value);
  };
  return (
    <Wrapper>
      <div
        className="chat_box"
        id="chat"
        style={isHidden ? { bottom: "0px" } : { bottom: "-360px" }}
      >
        <Chatbox className="chatheader" onClick={() => setIsHidden(!isHidden)}>
          Chats <i className=" icon fa fa-angle-down" aria-hidden="true"></i>
        </Chatbox>

        <div className="pesan_chat">
          <ListGroup variant="flush" className="list">
            {props.Users.map((user) => (
              <ListGroup.Item
                className="list"
                key={user.id}
                onClick={() => {
                  setselectedUser(user);
                  setShow(true);
                }}
              >
                <Image
                  className="me-4"
                  src={user.profilepicture}
                  roundedCircle
                  width={30}
                  height={30}
                  alt="profile"
                />
                {user.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
      {show ? (
        <div
          className="chat_box2"
          id="chat"
          style={show ? { bottom: "0px" } : { bottom: "-360px" }}
        >
          <Chatbox className="chatwindow">
            <Image
              className="me-4"
              src={selectedUser.profilepicture}
              roundedCircle
              width={30}
              height={30}
              alt="profile"
            />
            {selectedUser.name}
            <i
              style={{ marginLeft: "auto" }}
              className="fa fa-times"
              aria-hidden="true"
              onClick={() => setShow(!show)}
            ></i>
          </Chatbox>

          <div className="pesan_chat">
            <div className="messages">
              <ul>
                {messagedata?.messages
                  ?.filter((res) => res.userId === selectedUser.id)
                  .map((eachMessage, index) => {
                    console.log(eachMessage);
                    return (
                      <li key={index} className={eachMessage.type}>
                        <Image
                          className="me-4"
                          src={
                            eachMessage.type === "sent"
                              ? currentUser.profilepicture
                              : selectedUser.profilepicture
                          }
                          roundedCircle
                          width={30}
                          height={30}
                          alt="profile"
                        />
                        <p>{eachMessage.message}</p>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="message-input">
              <div className="wrap input-container">
                <input
                  className="form-control"
                  type="text"
                  value={inputmessage}
                  placeholder="Write your message..."
                  onChange={handleOnchange}
                />
                <i
                  className="icon fa fa-paper-plane"
                  aria-hidden="true"
                  onClick={handleEnter}
                >
                  {" "}
                  Send
                </i>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Wrapper>
  );
};
export default Chat;
