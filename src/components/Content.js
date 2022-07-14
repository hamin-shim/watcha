import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
export default function ContentCard({ data }) {
  return (
    <Content>
      <STitle className="heading">{data.title}</STitle>
      <SP>{data.content}</SP>
      {data.img.length > 0 ? (
        <Row>
          <Col
            md={4}
            sm={12}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px 0",
              // alignItems: "center",
            }}
          >
            <Image src={data.img[0]} />
          </Col>
          <Col
            md={4}
            sm={12}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px 0",
              // alignItems: "center",
            }}
          >
            <Image src={data.img[1]} />
          </Col>
          <Col
            md={4}
            sm={12}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px 0",
              // alignItems: "center",
            }}
          >
            <Image src={data.img[2]} />
          </Col>
        </Row>
      ) : null}
    </Content>
  );
}
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
const STitle = styled.h2`
  font-weight: bold;
`;
const SP = styled.p`
  line-height: 150%;
  text-align: center;
  white-space: pre-line;
`;

const Image = styled.img`
  max-width: 250px;
`;
