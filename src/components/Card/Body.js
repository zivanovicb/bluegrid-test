import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Body = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  padding: 15px 25px;
`;

export default Body;
