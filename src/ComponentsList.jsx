import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ComponentsList = () => {
  return (
    <ListWrap>
      <ListItem>
        <Link to="/accordian">Accordian </Link>
      </ListItem>
      <ListItem>
        <Link to="/hamburgerMenu">HamburgerMenu </Link>
      </ListItem>
    </ListWrap>
  );
};

const ListWrap = styled.div`
  display: flex;
  padding: 2rem 1rem;
`;

const ListItem = styled.div`
  display: felx;
  font-size: 2rem;
  margin: 1rem 1rem;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
  color: #000;
  border-radius: 15px;
  padding: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #eee;
  }
  transition: color 0.3s ease;
`;

export default ComponentsList;
