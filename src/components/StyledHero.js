import styled from "styled-components";

const StyledHero = styled.header`
  min-height: 60vh;
  width: 100%;
  background: url(${(props) => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
