import styled from "styled-components";

export default function Loader() {
  return <Img src="/loader.svg" />;
}

const Img = styled.img`
  height: 120px;
  width: 120px;
  display: block;
  margin: 20px auto;
`;
