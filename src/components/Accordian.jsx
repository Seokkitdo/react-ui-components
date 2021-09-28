import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";

const Accordian = () => {
  const [show, setShow] = useState(false);
  const [height, setHeight] = useState(0);
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const items = ["accordian", "button", "bento", "breadcrumb"];
  const onClickHandler = (e) => {
    setShow(!show);
    e.stopPropagation();
    if (parentRef.current.clientHeight === 0) {
      setHeight(275);
    } else {
      setHeight(0);
    }
    console.log(parentRef.current.clientHeight);
  };
  return (
    <>
      <AccordianPage>
        <AccordianWrap>
          <AccordianTitle>Market</AccordianTitle>
          <AccordianItem>
            <AccordianItemTitle>Total Points</AccordianItemTitle>
            <AccordianItemButton onClick={onClickHandler} show={show}>
              <FontAwesomeIcon icon={faChevronCircleUp} />
            </AccordianItemButton>
          </AccordianItem>
          <ClickedItemList ref={parentRef} height={height}>
            {items.map((item, index) => {
              return (
                <ClickedItem
                  ref={childRef}
                  key={index}
                  index={index}
                  lastIndex={items.length}
                >
                  {item}
                </ClickedItem>
              );
            })}
          </ClickedItemList>
        </AccordianWrap>
      </AccordianPage>
    </>
  );
};

const AccordianPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6483b;
`;
const AccordianWrap = styled.div`
  width: 400px;
  min-height: 500px;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 2rem 1.5rem;
`;

const AccordianTitle = styled.p`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const AccordianItem = styled.div`
  font-size: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  border-radius: 5px;
  color: #525252;
  background-color: #fffffa;
  margin-bottom: 1rem;
`;

const AccordianItemTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #525252;
`;

const AccordianItemButton = styled.button`
  font-size: 2.3rem;
  transform: ${(props) => props.show && "rotate(180deg)"};
  transition: transform 0.4s ease-in-out;
  color: #525252;
`;

const ClickedItemList = styled.div`
  height: ${(props) => `${props.height}px`};
  overflow: hidden;
  font-size: 2rem;
  width: 100%;
  justify-content: start;
  border-radius: 5px;
  color: #525252;
  background-color: #fffffa;
  transition: height 0.5s ease;
`;

const ClickedItem = styled.div`
  font-size: 2rem;
  width: 100%;
  display: block;
  justify-content: start;
  padding: 1rem;
  border-radius: 5px;
  color: #525252;
  background-color: #fffffa;
  &::after {
    content: "";
    display: block;
    padding: 1rem 0;
    width: 100%;
    border-bottom: ${(props) =>
      props.index !== props.lastIndex - 1 && "0.5px solid #d3d3d3"};
  }
`;

export default Accordian;
