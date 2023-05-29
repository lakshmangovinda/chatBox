import { useState } from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { ListGroup, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  .header-text {
    font-size: 30px;
    font-weight: 600;
    line-height: 5rem;
  }
  .img_profiles {
    height: 75px;
    width: 75px;
    border-radius: 50%;
  }
  .profile-logo {
    cursor: pointer;
  }
  .closebtn {
    display: flex;
    flex-direction: reverse;
    width: 100%;
    margin-left: 500px;
  }
`;

const Header = (props) => {
  const {
    type,
    model: { selectedUser = {}, usersList = [] },
    setShowHomePage,
  } = props;
  const [showSignOut, setShowSignOut] = useState(false);
  const navigate = useNavigate();
  const listOfUsers = [];
  const filteredList = usersList.filter((user) => user.id !== selectedUser.id);
  listOfUsers.push(filteredList[0], filteredList[1]);

  const switchToProfile = (user) => {
    props.addUsertoStore(user);
    navigate("/profile");
  };
  return (
    <>
      <HeaderWrapper>
        <div className="header-text">{type}</div>

        <div
          className="profile-logo"
          onClick={() => setShowSignOut(!showSignOut)}
        >
          <img
            className="img_profiles"
            src={selectedUser.profilepicture}
            alt="test"
          />
          <span> {selectedUser.name}</span>
        </div>
        {showSignOut ? (
          <Modal
            show={showSignOut}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            animation={false}
            style={{ left: "40rem", right: "1rem" }}
          >
            <div className="closebtn" style={{ marginLeft: "260px" }}>
              <Button
                variant=""
                onClick={() => {
                  setShowSignOut(!showSignOut);
                }}
              >
                <i className="fa fa-times" aria-hidden="true"></i>
              </Button>
            </div>

            <Modal.Header
              style={{
                justifyContent: "center",
                textAlign: "center",
                border: "none",
              }}
            >
              <Modal.Title>
                <div
                  className="profile-logo"
                  onClick={() => setShowSignOut(!showSignOut)}
                >
                  <img
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                    }}
                    src={selectedUser.profilepicture}
                    alt="test"
                  />
                  <div>{selectedUser.name}</div>
                  <div style={{ color: "lightgray", fontSize: "15px" }}>
                    {selectedUser.email}
                  </div>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ height: "9rem", overflow: "scroll" }}>
              <Card.Body>
                <ListGroup className="list" variant="flush">
                  {filteredList.map((user) => {
                    return (
                      <ListGroup.Item
                        // onClick={() => switchToProfile(user)}
                        key={`${user.id}`}
                        style={{ cursor: "pointer" }}
                      >
                        <Image
                          className="me-3"
                          src={user.profilepicture}
                          roundedCircle
                          width={50}
                          height={50}
                          alt="profile"
                        />
                        <span style={{ fontSize: "16px" }}>{user.name}</span>
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </Card.Body>
            </Modal.Body>
            <Modal.Footer style={{ border: "none", justifyContent: "center" }}>
              <Button
                variant="danger"
                onClick={() => {
                  navigate("/home");
                  setShowHomePage(true);
                }}
              >
                Sign Out
              </Button>
            </Modal.Footer>
          </Modal>
        ) : null}
      </HeaderWrapper>
      <hr />
    </>
  );
};

export default Header;
