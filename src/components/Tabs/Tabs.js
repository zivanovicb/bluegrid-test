import React, { useState } from "react";
import PropTypes from "prop-types";
import TabsContext from "../../context/tabs";
import makeChildTypeChecker from "../../helpers/makeChildTypeChecker";
import { TAB_PANEL_COMPONENT_NAME } from "../../constants";

const isTabPanel = makeChildTypeChecker(TAB_PANEL_COMPONENT_NAME);

const Tabs = ({ children, defaultIndex }) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  // Keeping track of the current tabPanel we're iterating over; this way it's safe to put any node betwen TabList and TabPanel component since it does not depend on order of compound components
  let currentPanelIndex;

  return (
    <TabsContext.Provider
      value={{
        selectedIndex,
        setSelectedIndex
      }}
    >
      {React.Children.map(children, child => {
        if (isTabPanel(child)) {
          currentPanelIndex =
            currentPanelIndex === undefined ? 0 : currentPanelIndex + 1;
          if (currentPanelIndex === selectedIndex) return child;
          // If child is tabPanel and is not currently selected nothing gets returned
          else return;
        }

        return child;
      })}
    </TabsContext.Provider>
  );
};

Tabs.propTypes = {
  defaultIndex: PropTypes.number.isRequired
};

// https://github.com/facebook/react/issues/6653#issuecomment-215793856
Tabs.defaultProps = {
  defaultIndex: 0
};

export default Tabs;
