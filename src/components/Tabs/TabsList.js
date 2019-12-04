import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 16px 16px 0 16px;
  border-bottom: 1px solid ${props => props.theme.lightGrey};
`;

// We'll generate indexes for each tab instead of relying on developer to do so
const TabsList = ({ children, ...rest }) => {
  return (
    <Wrapper {...rest}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { ...child.props, index })
      )}
    </Wrapper>
  );
};

export default TabsList;
