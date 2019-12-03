import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = ({ type, ...rest }) => {
  switch (type) {
    case "primary":
      return <Primary {...rest} />;
    default:
      return <Base {...rest} />;
  }
};

const Base = styled.button`
  border-radius: 50px;
  padding: 15px 30px;
  font-size: 15px;
  font-weight: 800;
  color: ${props => props.theme.black};
  background: white;
  border: 1px solid ${props => props.theme.lightGrey};
  &:hover {
    background: ${props => props.theme.blue};
    color: white;
  }
`;

const Primary = styled(Base)`
  background: ${props => props.theme.blue};
  color: white;
  border: none;
`;

Button.propTypes = {
  type: PropTypes.string.isRequired
};

export default Button;
