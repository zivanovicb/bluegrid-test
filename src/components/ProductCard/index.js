import React from "react";
import styled from "styled-components";
import Card from "../Card";
import Button from "../Button";
import PropTypes from "prop-types";

const ProductCard = ({
  description,
  features,
  price,
  isSelected,
  select,
  ...rest
}) => {
  const priceJSX = renderPrice(price);
  return (
    <Card {...rest}>
      <Card.Header isSelected={isSelected}>yeah yup</Card.Header>
      <Card.Body>
        <Description>{description}</Description>
        <List>
          {features.map((f, i) => (
            <ListItem key={i.toString()}>{f}</ListItem>
          ))}
        </List>

        <Price>{priceJSX}</Price>
        <Row>
          {isSelected ? (
            <Button type="primary">Selected</Button>
          ) : (
            <Button>Select</Button>
          )}
        </Row>
      </Card.Body>
    </Card>
  );
};

const renderPrice = str => {
  const re = /\d+/;

  // If price includes numbers we're going to bold them; otherwise a plain text gets rendered
  if (re.test(str)) {
    const [amount, billedPer] = str.split("/");
    return (
      <>
        <b>{amount}</b>/{billedPer}
      </>
    );
  } else {
    return str;
  }
};

export default ProductCard;

ProductCard.propTypes = {
  description: PropTypes.string.isRequired
};

const List = styled.ul`
  height: 150px;
  margin-bottom: 35px;
  margin-left: 15px;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
`;
const Description = styled.p`
  text-align: center;
  letter-spacing: 0.5px;
  color: ${props => props.theme.grey};
  margin-bottom: 25px;
`;

const Row = styled.div`
  width: 100%;
  text-align: center;
`;
const Price = styled.p`
  color: ${props => props.theme.black};
  text-align: center;
  margin-bottom: 15px;
`;
