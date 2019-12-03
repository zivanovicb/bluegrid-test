import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Body from "./Body";
import Description from "./Description";
import Price from "./Price";
import { List, ListItem } from "./List";

const Card = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 265px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
`;

Card.Header = Header;
Card.Body = Body;
Card.Description = Description;
Card.List = List;
Card.ListItem = ListItem;
Card.Price = Price;

export default Card;
