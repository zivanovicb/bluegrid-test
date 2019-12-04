import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Row from "../Row";
import Card from "../Card";
import Icon from "../Icon";
import Button from "../Button";
import getPriceProperties from "../../helpers/getPriceProperties";

const ProductCard = ({
  _id,
  name,
  description,
  features,
  price,
  isSelected,
  select,
  unselect,
  ...rest
}) => {
  const { isNumeric, amount, billedPer, priceString } = getPriceProperties(
    price
  );
  return (
    <Card {...rest}>
      <Card.Header isSelected={isSelected}>{name}</Card.Header>
      <Card.Body>
        <Card.Description>{description}</Card.Description>
        <Card.List>
          {features.map((f, i) => (
            <Card.ListItem key={i.toString()}>{f}</Card.ListItem>
          ))}
        </Card.List>

        <Card.Price>
          {isNumeric ? (
            <>
              <b>{amount}</b>/{billedPer}
            </>
          ) : (
            priceString
          )}
        </Card.Price>
        <Row>
          {isSelected ? (
            <Button
              type="primary"
              onClick={() => unselect(_id)}
              icon={<StyledCheckIcon name="check" width="15px" height="15px" />}
            >
              Selected
            </Button>
          ) : (
            <Button
              onClick={() =>
                select({ _id, name, description, features, price })
              }
            >
              Select
            </Button>
          )}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  select: PropTypes.func.isRequired,
  unselect: PropTypes.func.isRequired
};

const StyledCheckIcon = styled(Icon)`
  margin-left: 15px;
`;
