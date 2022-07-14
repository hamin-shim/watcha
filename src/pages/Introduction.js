import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Content from "../components/Content";
import { contents } from "../data";

export default function Introduction() {
  return (
    <Container style={{ margin: "100px auto" }}>
      <ContentBox>
        <Title className="heading">특별전 '빛나는 세계'</Title>
        <img
          width={"20%"}
          style={{ minWidth: "250px" }}
          // src="https://png.pngtree.com/png-clipart/20190117/ourlarge/pngtree-celebrate-colorful-fireworks-fireworks-png-image_435414.jpg"
          src="/img/light.png"
        />
        <h5
          style={{ marginTop: "30px", textAlign: "center", lineHeight: "150%" }}
        >
          '빛나는 세계'는 2022년 새빈갤러리에서 최초로 선보이는 특별 기획
          전시회입니다.
          <br />
          "모든 빛나는 것들에는 이야기가 있다"라는 주제로
          <br />
          세계를 감동케 한 이야기가 담긴 '빛나는 것들'을 조망합니다.
        </h5>
        {contents.map((content) => (
          <Content data={content} />
        ))}
      </ContentBox>
    </Container>
  );
}
const Title = styled.h1`
  font-weight: bold;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;
