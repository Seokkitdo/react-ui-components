import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
  };

  return (
    <MenuWrap>
      <Link to="/">
        <BackBtn>
          <FontAwesomeIcon icon={faHome} size="3x" />
        </BackBtn>
      </Link>
      <MenuBtn onClick={clickHandler}>
        <MenuBtnBurger open={open}></MenuBtnBurger>
      </MenuBtn>
    </MenuWrap>
  );
};

const MenuWrap = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #272727;
  justify-content: center;
  align-items: center;
`;

const BackBtn = styled.button`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: transparent;
  color: #fff;
`;

const MenuBtn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  border: 3px solid #fff;
`;

const MenuBtnBurger = styled.div`
  width: 50px;
  height: 6px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
  ${({ open }) =>
    open &&
    css`
      transform: translateX(-50px);
      background: transparent;
      box-shadow: none;
    `}
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 6px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
  }
  &:before {
    ${({ open }) =>
      open
        ? `transform: rotate(45deg) translate(35px, -35px)`
        : `transform: translateY(-16px);`}
  }
  &:after {
    ${({ open }) =>
      open
        ? `transform: rotate(-45deg) translate(35px, 35px);`
        : `transform: translateY(16px);`}
  }
`;

export default HamburgerMenu;
