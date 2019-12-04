import React from "react";
import ArrowIcon from "./Arrow";
import CheckIcon from "./Check";

const Icon = ({ width, height, name, className }) => {
  switch (name) {
    case "arrow":
      return <ArrowIcon width={width} height={height} className={className} />;
    case "check":
      return <CheckIcon width={width} height={height} className={className} />;
    default:
      return;
  }
};

export default Icon;
