import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export default function Talk() {
  return (
    <Container style={{ margin: "100px auto" }}>
      <h1 className="heading">갤러리 소개</h1>
      <Top>
        <p className="topContent">
          새빈은 고품격 문화창조에 기여하고, 대중과 소통하는 예술 창구를
          지향합니다.
          <br />
          아름다움을 향유하고 예술의 가치를 발견할 수 있는 우리만의 특별한
          전시를 통해 관람객들에게 빛나는 영감과 경험을 선사합니다.
          <br />
          <br />
          SAEBIN GALLERY
          <br />
          “품격 있는 아름다움을 발견하는 갤러리”
          <br />
          <br />
          2017년, 전시와 문화 공간 비즈니스를 위해 문을 연 새빈갤러리는
          <br />
          "품격 있는 아름다움"이라는 핵심 가치에 걸맞은
          <br />
          수준 높은 문화예술품들의 기획 전시를 개최하며 괄목할 만한 성과를
          이루어 왔습니다. <br />
          <br />
          새빈갤러리는 전통적인 예술의 미와 시대적 가치를 품은 국제예술이
          공존하는
          <br />
          21세기 글로벌 갤러리입니다. <br />
          <br /> 어디에서도 볼 수 없었던 다채로운 예술품들은 물론,
          <br />
          모두의 예술적 영감을 자극한 풍요로운 전시를 통해
          <br />
          대한민국 문화예술의 랜드마크로 자리매김할 예정입니다.
        </p>
        <Row>
          <Col
            md={12}
            lg={5}
            xl={4}
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "50px",
              justifyContent: "center",
            }}
          >
            <img
              // src="https://modo-phinf.pstatic.net/20191128_120/1574923475720VWbbG_JPEG/mosaymJEgL.jpeg?type=f320_320"
              src="/img/logo_new.png"
              width={"100%"}
              style={{ maxWidth: "250px" }}
            />
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <p>
              새빈갤러리의 아이덴티티는 "고귀함(Noble)"입니다. <br />
              어둠을 밝히는 태양 빛은 눈이 시리도록 숭고하지만,
              <br />손 닿을 수 없을 만큼 높은 곳에서 <br /> 우리를 내려다보는
              신적인 존재이기도 합니다.
              <br />
              모든 것들의 위에 있는 최상의 품격을 자랑하는 <br /> 새빈의
              고귀함을 가득 담은 상징입니다.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col
            md={12}
            lg={5}
            xl={4}
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "50px",
              justifyContent: "center",
            }}
          >
            <img
              // src="https://modo-phinf.pstatic.net/20191128_120/1574923475720VWbbG_JPEG/mosaymJEgL.jpeg?type=f320_320"
              src="/img/logo_bottom.JPG"
              width={"100%"}
              style={{ maxWidth: "250px" }}
            />
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <p>
              새빈은 새롭고, 빛나는 예술을 공유합니다.
              <br />
              새빈의 이름은 이러한 새빈의 가치관을 고스란히 담고 있습니다.
              <br />
              '새로움'을 뜻하는 '새'와 '빛나는'을 뜻하는 '빛'을 합쳐
              <br />
              갤러리 명칭을 구성하였습니다.
            </p>
          </Col>
        </Row>
      </Top>
      <h1 className="heading">관장 인사말</h1>
      <Content>
        <Row>
          <Col lg={4} md={5} sm={12}>
            <img
              style={{ width: "100%" }}
              // src="https://img.maisonkorea.com/2019/07/msk_5d33d2b5cd23e.jpg"
              src="/img/representor.png"
            />
          </Col>
          <Col>
            <Talking style={{ marginTop: "30px" }}>
              <p>
                <strong>
                  {/* &nbsp;&nbsp;&nbsp; */}
                  "새빈갤러리를 찾아주신 여러분, 반갑습니다"
                </strong>
                <br />
                <br />
                {/* &nbsp;&nbsp;&nbsp; */}
                바야흐로 고품격 문화창조의 시대입니다.
                <br />
                {/* &nbsp;&nbsp;&nbsp; */}
                새빈갤러리는 21세기에 걸맞은 품격 있는 예술을 지향합니다.
                <br />
                {/* &nbsp;&nbsp;&nbsp; */}
                새빈만의 특별한 전시회를 통해 대중에게 아름다움을 향유할 수 있는
                공간을 제공하고자 노력하고 있습니다. <br />
                <br />
                {/* &nbsp;&nbsp;&nbsp; */}
                예술은 우리 시대에 가장 중요한 가치입니다.
                <br />
                {/* &nbsp;&nbsp;&nbsp; */}
                위기의 시대에는 단순히 미술 작품의 가치에서 멈추는 것이 아니라,
                개념적·비물질적 세계에서의 공동체성을 지향하는 공동체 예술이
                가장 중요합니다. 새빈은 이러한 시대의 흐름에 맞추어 사회예술에
                바탕을 둔 실천적 예술을 펼치고자 합니다. <br />
                <br />
                {/* &nbsp;&nbsp;&nbsp; */}
                2017년 개관 이래 수많은 관람객 분들이 새빈을 찾아주셨고,
                새빈만의 아이덴티티를 담은 특별 전시회에 큰 응원을
                보내주셨습니다. <br />
                <br />
                {/* &nbsp;&nbsp;&nbsp; */}
                앞으로도 새빈은 관람객들의 기대에 부응할 수 있는 수준 높은
                문화예술 전시를 통해 '품격 있는 아름다움'이라는 핵심 가치를
                세계로 퍼뜨릴 것입니다. <br />
                <br />
                {/* &nbsp;&nbsp;&nbsp; */}
                소중한 시간 내어 새빈갤러리를 찾아주신 여러분의 걸음, 결코
                헛되이 하지 않을 것을 약속드립니다. <br />
                <br />
                {/* &nbsp;&nbsp;&nbsp; */}
                감사합니다.
                <br />
              </p>
              {/* <img width={"150px"} src="/img/sign.jpg" /> */}
              <h2 className="sign">Yu, Da-eun</h2>
            </Talking>
          </Col>
        </Row>
      </Content>
    </Container>
  );
}
const Top = styled.div`
  width: 80%;
  /* margin: auto; */
  margin-top: 50px;
  margin-bottom: 200px;
  .topContent {
    margin-bottom: 30px;
  }
`;
const Content = styled.div`
  margin-top: 40px;
`;
const Talking = styled.div`
  display: flex;
  flex-direction: column;
  img {
    align-self: flex-end;
  }
  .sign {
    align-self: flex-end;
  }
`;
