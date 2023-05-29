import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HeaderContainer from "../container/HeaderContainer";
import ProfileContainer from "../container/ProfileContainer";
import Gallery from "./Gallery";
import Posts from "./Posts";
import Todos from "./Todos";

const PageWrap = styled.div`
  display: flex;
`;

const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  border: solid 2px #6610f2;
  background: #6610f2;
  margin: 2rem;
  border-radius: 20px;
  padding-top: 20rem;
  padding-bottom: 20rem;
  .links-text {
    color: white;
    text-decoration: none;
    font-size: 25px;
    padding-left: 4rem;
    border-bottom: solid 2px white;
  }
`;

const NavigationBar = (props) => {
  const { setShowHomePage } = props;
  const [compType, setCompType] = useState("Profile");
  return (
    <PageWrap>
      <Col xs="3">
        <NavWrap>
          <Link
            to="/profile"
            className="links-text"
            onClick={() => setCompType("Profile")}
          >
            Profile
          </Link>
          <Link
            to="/posts"
            className="links-text"
            onClick={() => setCompType("Posts")}
          >
            Posts
          </Link>
          <Link
            to="/gallery"
            className="links-text"
            onClick={() => setCompType("Gallery")}
          >
            Gallery
          </Link>
          <Link
            to="/todos"
            className="links-text"
            onClick={() => setCompType("Todos")}
          >
            Todos
          </Link>
        </NavWrap>
      </Col>
      <Col xs="9">
        <HeaderContainer type={compType} setShowHomePage={setShowHomePage} />
        <Routes>
          <Route exact path="/profile" element={<ProfileContainer />}></Route>
          <Route exact path="/posts" element={<Posts />}></Route>
          <Route exact path="/gallery" element={<Gallery />}></Route>
          <Route exact path="/todos" element={<Todos />}></Route>
        </Routes>
      </Col>
    </PageWrap>
  );
};

export default NavigationBar;
