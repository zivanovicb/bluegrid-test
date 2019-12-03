import React from "react";
import styled from "styled-components";
import HashLoader from "react-spinners/HashLoader";
import { theme } from "../../constants";

const Loader = ({}) => {
  return (
    <Wrapper>
      <StyledHashLoader size={60} color={theme.darkBlue} />
    </Wrapper>
  );
};

const StyledHashLoader = styled(HashLoader)`
  display: none;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loader;
