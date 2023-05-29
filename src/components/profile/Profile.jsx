import styled from "styled-components";
import ChatContainer from "../../container/ChatContainer";

import LocationMap from "./LocationMap";

const Wrapper = styled.div`
.vr{
    margin-top:0 !important;
  }
  h2{
    opacity: 0.5;
  }
  .home-page {
    display: flex;
    flex-direction: row;
    font-size: 1.5rem !important;
  .address-section{
    width:100%;
  }
  }
    .title {
      text-align: right;
      line-height: 1.4em;
      opacity: 0.5;
    }
  
    .value {
      text-align: left;
      font-weight: 500;
      line-height: 1.4em;
      white-space: break-spaces
    }
  
    .profile-right {
      display: flex;
      align-items: self-start;
      flex-direction: column;
      padding: 4rem 0rem 0rem 4rem
    }
  
    .img_profiles {
      height: 250px;
      width: 250px;
      border-radius: 50%;
    }
  
    .image-section {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1em;
    }
  
    .address-seciotn-items {
      display: flex;
      gap: 0.5em;
      flex-direction: column;
    }
  
    .user-details {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.5em;
    }
    .user-name,
    .user-email,
    .user-phone,
    .user-website,
    .user-compnay-name {
      display: flex;
      width: 100%;
    }
    .work-expericne {
      display: flex;
      gap: 0.5em;
      flex-direction: column;
      align-items: center;
      white-space: nowrap;
    }
  }
`;

const Profile = (props) => {
  const {
    model: { selectedUser = {} },
  } = props;
  return (
    <>
      <Wrapper>
        <div className="home-page">
          <div className="profile-left">
            <div className="image-section">
              <img
                className="img_profiles"
                src={selectedUser.profilepicture}
                alt="test"
              />
              <span> {selectedUser.name}</span>
            </div>
            <div className="user-details">
              <div className="user-name">
                <span className="title">Username : </span>
                <span className="value"> {selectedUser?.name}</span>
              </div>
              <div className="user-email">
                <span className="title">e-mail : </span>
                <span className="value"> {selectedUser?.email}</span>
              </div>
              <div className="user-phone">
                <span className="title">Phone : </span>
                <span className="value"> {selectedUser?.phone}</span>
              </div>
              <div className="user-website">
                <span className="title">Website : </span>
                <span className="value"> {selectedUser.website}</span>
              </div>
            </div>
            <hr
              style={{
                width: "30vw",
                height: "5",
              }}
            />
            <div className="work-expericne">
              <h2>Company</h2>
              <div className="user-compnay-name">
                <span className="title">Name : </span>
                <span className="value"> {selectedUser?.company?.name}</span>
              </div>
              <div className="user-compnay-name">
                <span className="title">catchPhrase : </span>
                <span className="value">
                  {" "}
                  {selectedUser?.company?.catchPhrase}
                </span>
              </div>
              <div className="user-compnay-name">
                <span className="title">bs : </span>
                <span className="value"> {selectedUser?.company?.bs}</span>
              </div>
            </div>
          </div>
          <div className="vr"></div>
          <div className="profile-right">
            <div className="address-section">
              <h2>Address :</h2>
              <div className="user-compnay-name">
                <span className="title">Street: </span>
                <span className="value"> {selectedUser?.address?.street}</span>
              </div>
              <div className="user-compnay-name">
                <span className="title">Suite: </span>
                <span className="value"> {selectedUser?.address?.suite}</span>
              </div>
              <div className="user-compnay-name">
                <span className="title">City: </span>
                <span className="value">{selectedUser?.address?.city}</span>
              </div>
              <div className="user-compnay-name">
                <span className="title">Zip: </span>
                <span className="value"> {selectedUser?.address?.zipcode}</span>
              </div>
            </div>
            <LocationMap />
          </div>
        </div>
      </Wrapper>
      <ChatContainer
        Users={props.model.usersList}
        currentUser={selectedUser}
      ></ChatContainer>
    </>
  );
};
export default Profile;
