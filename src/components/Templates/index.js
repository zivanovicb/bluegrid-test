import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Row from "../Row";
import TemplateCard from "../TemplateCard";
import Loader from "../Loader";
import Button from "../Button";
import Icon from "../Icon";
import TabsContext from "../../context/tabs";
import useAxiosWithCaching from "../../hooks/useAxiosWithCaching";
import { BASE_API_URL } from "../../constants";

const Templates = ({ select, unselect, selectedTemplate, ...rest }) => {
  const { setSelectedIndex } = useContext(TabsContext);
  const [isLoading, hasError, templates] = useAxiosWithCaching(
    `${BASE_API_URL}/v1/templates`,
    "templates"
  );

  if (isLoading) return <Loader />;
  if (hasError) return <h1>We're sorry. Something went wrong!</h1>;

  return (
    <>
      <Wrapper {...rest}>
        {templates.map((t, i) => (
          <StyledTemplateCard
            _id={t._id}
            name={t.name}
            description={t.description}
            features={t.features}
            price={t.price}
            isSelected={t._id === selectedTemplate._id}
            select={select}
            unselect={unselect}
            key={i.toString()}
          />
        ))}
      </Wrapper>
      <Row>
        <Button
          type="squared"
          disabled={Object.keys(selectedTemplate).length === 0}
          icon={<StyledArrowIcon name="arrow" width="30px" height="30px" />}
          onClick={() => {
            setSelectedIndex(1);
          }}
        >
          Next
        </Button>

        <SpanSeparator>or</SpanSeparator>

        <Button type="anchor">Back</Button>
      </Row>
    </>
  );
};

Templates.propTypes = {
  select: PropTypes.func.isRequired,
  unselect: PropTypes.func.isRequired,
  selectedTemplate: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.string
  })
};

const SpanSeparator = styled.span`
  display: inline-block;
  margin: 0 15px;
`;

const StyledArrowIcon = styled(Icon)`
  margin-left: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 25px 50px;
  margin-bottom: 50px;
`;

const StyledTemplateCard = styled(TemplateCard)`
  margin-right: 16px;
  margin-bottom: 16px;
  &:last-of-type {
    margin-right: 0;
  }
`;

export default Templates;
