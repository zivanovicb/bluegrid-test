import React from "react";
import styled from "styled-components";
import useAxios from "../../hooks/useAxios";
import TemplateCard from "../TemplateCard";
import Loader from "../Loader";
import { BASE_API_URL } from "../../constants";

const Templates = ({}) => {
  const [isLoading, hasError, templates] = useAxios(
    `${BASE_API_URL}/v1/templates`
  );

  if (isLoading) return <Loader />;
  if (hasError) return <h1>We're sorry. Something went wrong!</h1>;

  return (
    <Wrapper>
      {templates.map((p, i) => (
        <StyledTemplateCard
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

const StyledTemplateCard = styled(TemplateCard)`
  margin-right: 16px;
  margin-bottom: 16px;
  &:last-of-type {
    margin-right: 0;
  }
`;

export default Templates;
