import React from "react";
import styled, { css } from "styled-components";

const SC_section = styled.section`
  width: 30%;
  margin: auto;
`;
const SC_p = styled.p`
  font-family: Helvetica, Arial, sans-serif;
  ${(props) =>
    (props.emre == 5 || props.meltem) &&
    css`
      color: red;
    `};
`;
const SC_p2 = styled(SC_p)`
  color: blue;
`;

const Text = (props) => {
  const { copyright, date, explanation } = props.data;

  return (
    <SC_section>
      <h2>{copyright}</h2>
      <h3>{date}</h3>
      <SC_p mert>{explanation}</SC_p>
      <SC_p2>bymeltem</SC_p2>
    </SC_section>
  );
};

export default Text;
