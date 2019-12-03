import React from "react";
import styled from "styled-components";
import useAxios from "../../hooks/useAxios";
import ProductCard from "../ProductCard";
import Loader from "../Loader";
import { BASE_API_URL } from "../../constants";

const Products = ({}) => {
  const [isLoading, hasError, products] = useAxios(
    `${BASE_API_URL}/v1/products`
  );

  if (isLoading) return <Loader />;
  if (hasError) return <h1>We're sorry. Something went wrong!</h1>;

  return (
    <Wrapper>
      {products.map((p, i) => (
        <StyledProductCard
          name={p.name}
          description={p.description}
          features={p.features}
          price={p.price}
          key={i.toString()}
        />
      ))}
    </Wrapper>
  );
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
