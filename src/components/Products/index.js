import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useAxios from "../../hooks/useAxios";
import ProductCard from "../ProductCard";
import Loader from "../Loader";
import { BASE_API_URL } from "../../constants";

const Products = ({ select, unselect, selectedProducts, ...rest }) => {
  const [isLoading, hasError, products] = useAxios(
    `${BASE_API_URL}/v1/products`
  );

  if (isLoading) return <Loader />;
  if (hasError) return <h1>We're sorry. Something went wrong!</h1>;

  return (
    <Wrapper {...rest}>
      {products.map((p, i) => {
        const isSelected =
          selectedProducts.filter(prod => prod._id === p._id).length > 0;
        return (
          <StyledProductCard
            _id={p._id}
            name={p.name}
            description={p.description}
            features={p.features}
            price={p.price}
            isSelected={isSelected}
            select={select}
            unselect={unselect}
            key={i.toString()}
          />
        );
      })}
    </Wrapper>
  );
};

Products.propTypes = {
  select: PropTypes.func.isRequired,
  unselect: PropTypes.func.isRequired,
  selectedProducts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      price: PropTypes.string.isRequired
    })
  )
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 25px 50px;
`;

const StyledProductCard = styled(ProductCard)`
  margin-right: 16px;
  margin-bottom: 16px;
  &:last-of-type {
    margin-right: 0;
  }
`;

export default Products;
