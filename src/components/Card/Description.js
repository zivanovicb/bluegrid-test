import styled from "styled-components";

const Description = styled.p`
  min-height: 50px;
  text-align: center;
  letter-spacing: 0.5px;
  color: ${props => props.theme.grey};
  margin-bottom: 25px;
`;

export default Description;
