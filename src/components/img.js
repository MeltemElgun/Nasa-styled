import React from "react";
import styled from "styled-components";
const SC_main = styled.main`
  background-color: #eeeeee;
  width: 80%;
  margin: auto;
  padding: 5% 10%;
`;

const SC_img = styled.img`
  border-radius: 40px;
  max-height: 40vh;
  margin: auto;
`;

const Img = (a) => {
  //a=props yerine kullandık

  return (
    <SC_main>
      <SC_img src={a.url} alt={a.title} />
    </SC_main>
  );
};

export default Img;
