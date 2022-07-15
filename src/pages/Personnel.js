import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import styled from "styled-components";

export default function Personnel() {
  return (
    <Container
      style={{ marginTop: "100px", minHeight: window.innerHeight - 240 }}
    >
      <Top>
        <h3 className="heading">구성원 소개</h3>
      </Top>
      <TopTable>
        <div className="col1">갤러리 관장</div>
        <div className="col2">유다은</div>
        {/* <div className="col3">
          <div className="row1">자택 전화번호</div>
          <div className="row2">휴대 전화번호</div>
        </div>
        <div className="col4">
          <div className="row1">01-1234-5678</div>
          <div className="row2">010-1234-5678</div>
        </div> */}
      </TopTable>
      <Row>
        <Col style={{ marginBottom: "50px" }} sm={6} md={3}>
          <Main>
            <div className="top">전시 관리팀 / 팀장</div>
            <div className="name">소유한</div>
          </Main>
          <Line />
          <Normal>
            <EachLast>감동인</EachLast>
          </Normal>
        </Col>
        <Col style={{ marginBottom: "50px" }} sm={6} md={3}>
          <Main>
            <div className="top">전시 사업팀 / 팀장</div>
            <div className="name">조성해</div>
          </Main>
          <Line />
          <Normal>
            <EachLast>전문가</EachLast>
          </Normal>
        </Col>
        <Col style={{ marginBottom: "50px" }} sm={6} md={3}>
          <Main>
            <div className="top">학예연구실 / 팀장</div>
            <div className="name">문희재</div>
          </Main>
          <Line />
          <Normal>
            <EachLast>김경주</EachLast>
          </Normal>
        </Col>
        <Col style={{ marginBottom: "50px" }} sm={6} md={3}>
          <Main>
            <div className="top">보안팀 / 팀장</div>
            <div className="name">보안은</div>
          </Main>
          <Line />
          <Normal>
            <Each>용감한</Each>
            <Each>최고야</Each>
            <Each>박장대</Each>
            <Each>김무한</Each>
            <EachLast>허술</EachLast>
          </Normal>
        </Col>
      </Row>
      <div style={{ textAlign: "right", color: "blue" }}>
        ※ 환경미화원 상시 모집
      </div>
    </Container>
  );
}
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .sep {
    margin: 0 10px;
  }
`;
const TopTable = styled.div`
  display: grid;
  width: 50%;
  margin: auto;
  /* border: 1px solid black; */
  /* grid-template-columns: repeat(4, 25%); */
  grid-template-columns: repeat(2, 1fr);
  border-top: 2px solid #d4c39f;
  border-bottom: 1px solid #ded9ce;
  margin-bottom: 50px;
  div {
    padding: 5px 0;
  }
  .col1,
  .col2 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .col3,
  .col4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
  }
  .row1,
  .row2 {
    padding: 5px 0;
    /* border: 1px solid black; */
    width: 100%;
    height: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .row1 {
    /* border-bottom: 1px solid #ced6e0; */
    border-bottom: 1px solid #d1ccc0;
  }
  .col1,
  .col3 {
    background: #e7decb;
  }
`;
const Main = styled.div`
  div {
    padding: 5px 0;
    text-align: center;
  }
  .top {
    border-top: 2px solid #d4c39f;
    background: #e7decb;
  }
  .name {
    border-bottom: 1px solid #ded9ce;
  }
`;
const Normal = styled.div`
  border-top: 1px solid #ded9ce;
  border-bottom: 1px solid #ded9ce;
`;
const Each = styled.div`
  padding: 5px 0;
  text-align: center;
  border-bottom: 1px solid #ded9ce;
`;
const EachLast = styled(Each)`
  border: 0;
`;
const Line = styled.div`
  width: 2px;
  height: 15px;
  background-color: #ded9ce;
  margin: auto;
`;
