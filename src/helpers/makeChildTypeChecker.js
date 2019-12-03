const makeChildTypeChecker = componentName => child =>
  child && child.type && child.type.name === componentName;

export default makeChildTypeChecker;
