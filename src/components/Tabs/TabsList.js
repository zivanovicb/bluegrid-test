import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 16px 16px 0 16px;
  border-bottom: 1px solid ${props => props.theme.lightGrey};
`;

const TabsList = ({ children, selectedIndex, setSelectedIndex, ...rest }) => {
  return (
    <Wrapper {...rest}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          ...child.props,
          index,
          isSelected: index === selectedIndex,
          setSelectedIndex
        });
      })}
    </Wrapper>
  );
};

TabsList.propTypes = {
  selectedIndex: PropTypes.number.isRequired,
  setSelectedIndex: PropTypes.func.isRequired
};

TabsList.defaultProps = {
  selectedIndex: 0,
  setSelectedIndex: () => {}
};

export default TabsList;
