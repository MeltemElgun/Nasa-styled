import React from "react";
import styled from "styled-components";
import Search from "./search";

const SC_header = styled.header`
  background-color: ${(props) => (props.meltem ? " blue" : "black")};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  width: 100%;

  h1 {
    color: white;
  }
`;
const SC_img = styled.img`
  height: 50px;
`;

const Header = (props) => {
  const { changeHandler, tarih } = props;
  return (
    <SC_header meltem>
      <SC_img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" />
      <h1>NASA</h1>
      <Search changeHandler={changeHandler} tarih={tarih} />
    </SC_header>
  );
};

export default Header;
