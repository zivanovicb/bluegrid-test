import React from "react";
import ArrowIcon from "./Arrow";
import CheckIcon from "./Check";
import CloseIcon from "./Close";

const Icon = ({ width, height, name, className }) => {
  switch (name) {
    case "arrow":
      return <ArrowIcon width={width} height={height} className={className} />;
    case "check":
      return <CheckIcon width={width} height={height} className={className} />;
    case "close":
      return <CloseIcon width={width} height={height} className={className} />;
    default:
      return;
  }
};

export default Icon;
