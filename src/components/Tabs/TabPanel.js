import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TabPanel = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

TabPanel.propTypes = {
  children: PropTypes.any.isRequired
};
const Wrapper = styled.div``;

export default TabPanel;
