import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Person from "../components/Person";
import { peoples } from "../data";

export default function Personnel() {
  const [tab, setTab] = useState(0);
  const [tabData, setTabData] = useState(peoples);
  useEffect(() => {
    console.log("tab is " + tab);
    let data = peoples.filter((person) => person.tabName === String(tab));
    // peoples.map((person) => console.log(person.tabName === String(tab)));
    console.log(data);
    setTabData(data);
  }, [tab]);
  return (
    <Container style={{ marginTop: "100px" }}>
      <Top>
        <h3>구성원 소개</h3>
        <Categories>
          <Category
            className={tab === 0 ? "underline" : ""}
            onClick={() => setTab(0)}
          >
            전체
          </Category>
          <span className="sep">|</span>
          <Category
            className={tab === 1 ? "underline" : ""}
            onClick={() => setTab(1)}
          >
            1
          </Category>
          <span className="sep">|</span>
          <Category
            className={tab === 2 ? "underline" : ""}
            onClick={() => setTab(2)}
          >
            2
          </Category>
          <span className="sep">|</span>
          <Category
            className={tab === 3 ? "underline" : ""}
            onClick={() => setTab(3)}
          >
            3
          </Category>
        </Categories>
      </Top>
      <Row>
        {tab === 0
          ? peoples.map((eachData) => (
              <Col lg={3} md={4} sm={6} xs={6}>
                <Person data={eachData} />
              </Col>
            ))
          : tabData.map((eachData) => (
              <Col lg={3} md={4} sm={6} xs={6}>
                <Person data={eachData} />
              </Col>
            ))}
      </Row>
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
const Categories = styled.div`
  display: flex;
`;
const Category = styled.div`
  cursor: pointer;
`;
