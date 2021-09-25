import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ComponentsList = () => {
  return (
    <ListWrap>
      <ListItem>
        <Link to="/Accordian">Accordian </Link>
      </ListItem>
    </ListWrap>
  );
};

const ListWrap = styled.div`
  width: 100vw;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
`;

const ListItem = styled.div`
  display: felx;
  width: 400px;
  font-size: 6rem;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
  color: #000;
  border-radius: 50px;
  padding: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #eee;
  }
  transition: color 0.3s ease;
`;

export default ComponentsList;
