import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export default function Talk() {
  return (
    <Container style={{ marginTop: "100px" }}>
      <h1>관장 인사말</h1>
      <Content>
        <Row>
          <Col lg={6} md={5} sm={12}>
            <img
              style={{ width: "100%" }}
              src="https://img.maisonkorea.com/2019/07/msk_5d33d2b5cd23e.jpg"
            />
          </Col>
          <Col>
            <Talking>
              <p>
                <strong>"새빈 갤러리를 찾아주신 여러분, 반갑습니다"</strong>
                <br />
                <br />
                바야흐로 고품격 문화창조의 시대입니다.
                <br />
                새빈갤러리는 21세기에 걸맞은 품격 있는 예술을 지향합니다.
                <br />
                새빈만의 특별한 전시회를 통해 대중에게 아름다움을 향유할 수 있는
                공간을 제공하고자 노력하고 있습니다. <br />
                <br />
                예술은 우리 시대에 가장 중요한 가치입니다.
                <br />
                위기의 시대에는 단순히 미술 작품의 가치에서 멈추는 것이 아니라,
                개념적·비물질적 세계에서의 공동체성을 지향하는 공동체 예술이
                가장 중요합니다. 새빈은 이러한 시대의 흐름에 맞추어 사회예술에
                바탕을 둔 실천적 예술을 펼치고자 합니다. <br />
                <br />
                2017년 개관 이래 수많은 관람객 분들이 새빈을 찾아주셨고,
                새빈만의 아이덴티티를 담은 특별 전시회에 큰 응원을
                보내주셨습니다. <br />
                <br />
                앞으로도 새빈은 관람객들의 기대에 부응할 수 있는 수준 높은
                문화예술 전시를 통해 '품격 있는 아름다우'이라는 핵심 가치를
                세계로 퍼뜨릴 것입니다. <br />
                <br />
                소중한 시간 내어 새빈갤러리를 찾아주신 여러분의 걸음, 결코
                헛되이 하지 않을 것을 약속드립니다. <br />
                <br />
                감사합니다.
                <br />
              </p>
              <img
                width={"150px"}
                src="https://upload.wikimedia.org/wikipedia/commons/a/ae/%EC%B5%9C%EA%B4%91%EB%AA%A8_%EC%84%9C%EB%AA%85%28png%29.png"
              />
            </Talking>
          </Col>
        </Row>
      </Content>
    </Container>
  );
}
const Content = styled.div``;
const Talking = styled.div`
  display: flex;
  flex-direction: column;
  img {
    align-self: flex-end;
  }
`;
