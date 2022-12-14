import styled from "styled-components";

export default function Header() {
  return <StyledHeader>Geschenkezeit</StyledHeader>;
}

const StyledHeader = styled.h1`
  font-family: AppleGothic;
  text-align: center;
  background-color: #2ab7ca;
  color: #f4f4f8;
  margin-block: 0px;
  padding: 15px;
`;
