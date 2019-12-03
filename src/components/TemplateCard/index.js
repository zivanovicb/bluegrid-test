import React from "react";
import styled from "styled-components";
import Card from "../Card";
import Button from "../Button";
import PropTypes from "prop-types";
import getPriceProperties from "../../helpers/getPriceProperties";

const TemplateCard = ({
  name,
  description,
  features,
  price,
  isSelected,
  select,
  ...rest
}) => {
  const { isNumeric, amount, billedPer, priceString } = getPriceProperties(
    price
  );
  return (
    <Card {...rest}>
      <Card.Header isSelected={isSelected}>
        {name}
        <Separator />
        <PriceTag>{amount}</PriceTag>
      </Card.Header>
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
            <Button type="primary">Selected</Button>
          ) : (
            <Button>Select</Button>
          )}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default TemplateCard;

TemplateCard.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired
};

const PriceTag = styled.span`
  color: ${props => props.theme.grey};
`;

const Separator = styled.div`
  display: inline-block;
  width: 2px;
  height: 13px;
  background: ${props => props.theme.grey};
  margin: 0 5px;
`;

const Row = styled.div`
  width: 100%;
  text-align: center;
`;
