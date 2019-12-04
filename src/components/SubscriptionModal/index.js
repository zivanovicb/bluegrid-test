import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Button from "../Button";
import Icon from "../Icon";
import TemplateCard from "../TemplateCard";
import ProductCard from "../TemplateCard";
import PropTypes from "prop-types";

const SubscriptionModal = ({
  selectedTemplate,
  selectedProducts,
  isModalOpen,
  contentLabel,
  onRequestClose,
  overlayStyles
}) => {
  return (
    <StyledModal
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={{
        overlay: overlayStyles
      }}
    >
      <Heading>Congratulations, you have successfully subscribed! 🎉</Heading>

      <ModalSectionTitle>Chosen Template</ModalSectionTitle>
      <CardList>
        <StyledTemplateCard
          isSelected={true}
          renderCTA={false}
          {...selectedTemplate}
        />
      </CardList>

      <ModalSectionTitle>Chosen Products</ModalSectionTitle>
      <CardList>
        {selectedProducts.map((p, i) => {
          return (
            <StyledProductCard
              key={i.toString()}
              isSelected={true}
              renderCTA={false}
              {...p}
            />
          );
        })}
      </CardList>

      <StyledButton
        type="squared"
        icon={<StyledCloseButton name="close" width="15px" height="15px" />}
        onClick={() => {
          onRequestClose();
        }}
      >
        Close
      </StyledButton>
    </StyledModal>
  );
};

SubscriptionModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  overlayStyles: PropTypes.object,
  contentLabel: PropTypes.string.isRequired,
  selectedTemplate: PropTypes.shape({
    _id: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.string
  }),
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
export default SubscriptionModal;

const StyledButton = styled(Button)`
  margin: 0 auto;
`;

const StyledCloseButton = styled(Icon)`
  margin-left: 15px;
`;
const StyledTemplateCard = styled(TemplateCard)`
  margin-bottom: 30px;
`;

const StyledProductCard = styled(ProductCard)`
  margin-right: 15px;
  margin-bottom: 30px;
  &:last-of-type {
    margin-right: 0;
  }
`;

const ModalSectionTitle = styled.h3`
  color: ${props => props.theme.black};
  margin-bottom: 15px;
`;

const CardList = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const styledModalClassName = "styled-modal";

const Heading = styled.h1`
  text-align: center;
  color: ${props => props.theme.darkBlue};
  margin-bottom: 30px;
`;
const StyledModal = styled(Modal).attrs({
  className: styledModalClassName
})`
  &.${styledModalClassName} {
    position: absolute;
    top: 30px;
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);
    width: 1200px;
    max-height: calc(100% - 60px);
    padding: 25px;
    background: white;
    border: 1px solid ${props => props.theme.lightGrey};
    border-radius: 4px;
    outline: none;
    overflow: auto;
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
  }
`;
