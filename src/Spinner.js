import React from "react";
import styled from "styled-components";
import AppleIcon from "@material-ui/icons/Apple";

const Spinner = (props) => {
  return (
    <Outter>
      <AppleIcon style={{ color: "#6a7ba2", fontSize: "150px" }} />
    </Outter>
  );
};

const Outter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffdfde;
`;

export default Spinner;
