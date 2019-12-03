import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Header = ({ children, isSelected }) => {
  return (
    <Wrapper isSelected={isSelected}>
      <Title isSelected={isSelected}>{children}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  background: ${props => (props.isSelected ? props.theme.lightBlue : "white")};
  padding: 20px 0;
  font-weight: 500;
  border-bottom: 1px solid ${props => props.theme.lightGrey};
`;

const Title = styled.span`
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => (props.isSelected ? props.theme.blue : props.theme.black)};
`;

Header.propTypes = {
  isSelected: PropTypes.bool.isRequired
};

export default Header;
