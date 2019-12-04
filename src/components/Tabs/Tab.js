import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import TabsContext from "../../context/tabs";

const Tab = ({ children, index, ...rest }) => {
  const { selectedIndex, setSelectedIndex } = useContext(TabsContext);
  return (
    <Button
      role="tab"
      isSelected={selectedIndex === index}
      onClick={() => setSelectedIndex(index)}
      {...rest}
    >
      {children}
    </Button>
  );
};

Tab.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.any.isRequired
};

// https://github.com/facebook/react/issues/6653#issuecomment-215793856
Tab.defaultProps = {
  index: 0
};

const Button = styled.button`
  margin-right: 45px;
  padding-bottom: 16px;
  font-size: 1rem;
  font-weight: 700;
  background: ${props => props.theme.white};
  color: ${props =>
    props.isSelected ? props.theme.darkBlue : props.theme.grey};
  border-bottom: 4px solid
    ${props => (props.isSelected ? props.theme.darkBlue : props.theme.white)};

  &:hover {
    color: ${props => props.theme.darkBlue};
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export default Tab;
