import Image from 'next/image';
import React from 'react'
import styled from "styled-components";

export default function CharacterCard({data}) {

  console.log(data);
  // const {data} = props;
  return <Wrapper>
    <Image src={data.image} />
    <h2>
      {data.name}
    </h2>
    <h4>
      {data.species}
    </h4>
  </Wrapper>;
}

const Wrapper = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 16px;
  border-radius: 4px;
  background-color: ${(p) => p.theme.background2};
`;
const Img = styled.img`

`;
const Name = styled.h3`

`;
const Species = styled.h6`

`;
