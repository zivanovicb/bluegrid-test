import React from "react";
import styled from "styled-components";
import Row from "../Row";
import Card from "../Card";
import Button from "../Button";
import Icon from "../Icon";
import PropTypes from "prop-types";
import getPriceProperties from "../../helpers/getPriceProperties";

const TemplateCard = ({
  _id,
  name,
  description,
  features,
  price,
  isSelected,
  select,
  unselect,
  renderCTA,
  ...rest
}) => {
  const {
    isNumeric,
    numericValue,
    amount,
    billedPer,
    priceString
  } = getPriceProperties(price);
  return (
    <Card {...rest}>
      <Card.Header isSelected={isSelected}>
        {name}
        <Separator />
        <PriceTag>{numericValue}</PriceTag>
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
        
        {renderCTA && (
          <Row>
            {isSelected ? (
              <Button
                type="primary"
                onClick={() => unselect()}
                icon={
                  <StyledCheckIcon name="check" width="15px" height="15px" />
                }
              >
                Selected
              </Button>
            ) : (
              <Button
                onClick={() =>
                  select({
                    _id,
                    name,
                    description,
                    features,
                    price
                  })
                }
              >
                Select
              </Button>
            )}
          </Row>
        )}
      </Card.Body>
    </Card>
  );
};

export default TemplateCard;

TemplateCard.propTypes = {
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  select: PropTypes.func,
  unselect: PropTypes.func,
  renderCTA: PropTypes.bool
};

TemplateCard.defaultProps = {
  renderCTA: true
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

const StyledCheckIcon = styled(Icon)`
  margin-left: 15px;
`;
