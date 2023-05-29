import styled from "styled-components";

const ProfileWrapper = styled.div`

  .pageContent{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    align-content:center; 
    height:80vh;
    font-family: roboto;
    font-size: 7rem;
    font-weight: bold;
    opacity:0.1;


  }
`;

const Posts = () => {
  return (
    <ProfileWrapper>
      <div className="pageContent">Coming Soon</div>
    </ProfileWrapper>
  );
};

export default Posts;
