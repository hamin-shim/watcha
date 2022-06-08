import React from "react";
import styled from "styled-components";

export default function Person({ data }) {
  return (
    <CardBox>
      <img src={data.src} width={"100%"} />
      <InfoBox>
        <span>{data.name}</span>
        <span>{data.type}</span>
        <span>
          <strong>T.</strong>
          {data.tel}
        </span>
        <span>{data.describe}</span>
      </InfoBox>
    </CardBox>
  );
}
const CardBox = styled.div``;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;
