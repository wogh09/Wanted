import React from "react";
import styled from "styled-components";

export default function Slide({ img }) {
  return <IMG src={img} />;
}
const IMG = styled.img`
  width: 100%;
  height: 30vh;
  padding-top: 50px;
  padding-left: 350px;
`;
