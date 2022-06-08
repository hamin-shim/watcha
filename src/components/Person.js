import React from "react";
import styled from "styled-components";
const exData = {
  id: 7,
  name: "고경민2",
  category: "변호사2",
  tabName: "2",
  tel: "02-3703-1431",
  describe: "공정거래, 기업인수 및 합병, 외국인투자, 독일, 유럽",
  src: "https://mblogthumb-phinf.pstatic.net/MjAyMDA5MDhfMjM5/MDAxNTk5NTc0NTgzODIx._wtN9VGBsSnc7Z5CwFZCqJX51dFqNT1B74Kvzq-jqYMg.7irYFwtWol4Lk1IkffrJ-9VGTDP9P9uOno0SnrS2Hpgg.JPEG.dltpdud03/1599574582877.jpg?type=w800",
};
export default function Person({ data }) {
  return (
    <CardBox>
      <img src={exData.src} width={"100%"} />
      <InfoBox>
        <span>{exData.name}</span>
        <span>{exData.type}</span>
        <span>
          <strong>T.</strong>
          {exData.tel}
        </span>
        <span>{exData.describe}</span>
      </InfoBox>
    </CardBox>
  );
}
const CardBox = styled.div``;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;
