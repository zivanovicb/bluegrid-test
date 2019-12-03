export default componentName => child =>
  child && child.type && child.type.name === componentName;
