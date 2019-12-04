import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useAxios from "../../hooks/useAxios";
import TemplateCard from "../TemplateCard";
import Loader from "../Loader";
import { BASE_API_URL } from "../../constants";

const Templates = ({ select, unselect, selectedTemplates, ...rest }) => {
  const [isLoading, hasError, templates] = useAxios(
    `${BASE_API_URL}/v1/templates`
  );

  if (isLoading) return <Loader />;
  if (hasError) return <h1>We're sorry. Something went wrong!</h1>;

  return (
    <Wrapper {...rest}>
      {templates.map((t, i) => {
        const isSelected =
          selectedTemplates.filter(temp => temp._id === t._id).length > 0;

        return (
          <StyledTemplateCard
            _id={t._id}
            name={t.name}
            description={t.description}
            features={t.features}
            price={t.price}
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

Templates.propTypes = {
  select: PropTypes.func.isRequired,
  unselect: PropTypes.func.isRequired,
  selectedTemplates: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
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

const StyledTemplateCard = styled(TemplateCard)`
  margin-right: 16px;
  margin-bottom: 16px;
  &:last-of-type {
    margin-right: 0;
  }
`;

export default Templates;
