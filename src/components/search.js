import React from "react";
import styled from "styled-components";

const SC_input = styled.input`
  display: inline-block;
`;

const Search = (props) => {
  const { tarih, changeHandler } = props;

  return (
    <div>
      <input
        value={tarih}
        onChange={(event) => changeHandler(event.target.value)}
        name="date"
        type="date"
      />
    </div>
  );
};

export default Search;
