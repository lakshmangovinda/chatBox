import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Wave from "../../images/wave.svg";
import { ListGroup, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../NavigationBar";

const HomeWrapper = styled.div`
  .card {
    width: 600px;
  }
  .card-head {
    padding: 20px;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: roboto;
  }
  .list {
    height: 300px;
    overflow: scroll;
    font-size: 20px;
    font-family: roboto;
  }
`;

const Home = (props) => {
  const [userList, setUserList] = useState([]);
  const [showHomePage, setShowHomePage] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://panorbit.in/api/users.json")
      .then((response) => {
        setUserList(response.data.users);
        props.addUsertoStoreHandler(response.data.users);
      })
      .catch((err) => {
        console.log("Error in getting users info", err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigatingToProfile = (user) => {
    setShowHomePage(false);
    props.addUsertoStore(user);
    navigate("/profile");
  };

  return (
    <>
      {showHomePage ? (
        <HomeWrapper>
          <img src={Wave} alt="wave" width="100%" className="image" />
          <Modal
            show
            size="lg"
            scrollable
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={false}
            className=""
          >
            <Modal.Header>
              <Modal.Title>
                <div>Select an account</div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ height: "35rem" }}>
              <Card.Body>
                <ListGroup className="list" variant="flush">
                  {userList.map((user) => {
                    return (
                      <ListGroup.Item
                        onClick={() => navigatingToProfile(user)}
                        key={`${user.id}`}
                        style={{ cursor: "pointer" }}
                      >
                        <Image
                          className="me-4"
                          src={user.profilepicture}
                          roundedCircle
                          width={50}
                          height={50}
                          alt="profile"
                        />
                        {user.name}
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </Card.Body>
            </Modal.Body>
          </Modal>
        </HomeWrapper>
      ) : (
        <NavigationBar setShowHomePage={setShowHomePage} />
      )}
    </>
  );
};

export default Home;
