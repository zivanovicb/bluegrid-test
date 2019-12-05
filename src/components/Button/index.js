import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = ({ type, children, icon, ...rest }) => {
  switch (type) {
    case "primary":
      return (
        <Primary hasIcon={!!icon} {...rest}>
          {children}
          {icon}
        </Primary>
      );
    case "squared":
      return (
        <Squared hasIcon={!!icon} {...rest}>
          {children}
          {icon}
        </Squared>
      );
    case "default":
      return (
        <Base hasIcon={!!icon} {...rest}>
          {children}
        </Base>
      );
    case "anchor":
      return <AnchorLikeButton {...rest}>{children}</AnchorLikeButton>;
    default:
      return (
        <Base hasIcon={!!icon} {...rest}>
          {children}
        </Base>
      );
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
  ${props =>
    props.hasIcon &&
    `
      display: flex;
      align-items: center;
  `}
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

const Squared = styled(Primary)`
  color: white;
  border-radius: 4px;
  padding: 15px 50px;
  &:disabled {
    opacity: 0.6;
  }
`;

const AnchorLikeButton = styled.button`
  text-decoration: underline;
  color: ${props => props.theme.darkBlue};
`;

Button.propTypes = {
  type: PropTypes.string
};

export default Button;
