import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Top>
        <Content>
          <h1 className="title">SAEBIN GALLERY</h1>
          <h2 className="subtitle">"품격 있는 아름다움을 발견하는 갤러리"</h2>
          <h5 className="paragraph">
            새빈은 고품격 문화창조에 기여하고, 대중과 소통하는 예술 창구를
            지향합니다. <br /> 아름다움을 향유하고 예술의 가치를 발견할 수 있는
            우리만의 특별한 전시를 통해 <br />
            관람객들에게 빛나는 영감과 경험을 선사합니다.
          </h5>
        </Content>
      </Top>
      {/* <Mid>
        <p className="topContent">
          2017년, 전시와 문화 공간 비즈니스를 위해 문을 연 새빈갤러리는
          <br />
          "품격 있는 아름다움"이라는 핵심 가치에 걸맞은
          <br />
          수준 높은 문화예술품들의 기획 전시를 개최하며 만족할 만한 성과를
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
              justifyContent: "center",
              paddingRight: "50px",
            }}
          >
            <img
              // src="https://modo-phinf.pstatic.net/20191128_120/1574923475720VWbbG_JPEG/mosaymJEgL.jpeg?type=f320_320"
              src="/img/logo_new.png"
              width={"100%"}
              style={{ maxWidth: "250px" }}
            />
          </Col>
          <Col>
            <p>
              새빈갤러리의 아이덴티티는 "고귀함(Noble)"입니다. <br />
              어둠을 밝히는 태양 빛은 눈이 시리도록 숭고하지만,
              <br />손 닿을 수 없을 만큼 높은 곳에서 <br /> 우리를 내려다보는
              신적인 존재이기도 합니다.
              <br />
              모든 것들의 위에 있는 최상의 품격을 자랑하는 <br /> 새빈의
              고귀함을 가득 담은 상징입니다. <br />
              <br />
              <br />
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
      </Mid> */}
    </>
  );
}
const Top = styled.div`
  width: 100%;
  /* background-image: url("https://m.canon-ci.co.kr:8443/resources/images/support/photo_gy01.png"); */
  height: 95vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/img/mainBg.png");
  background-size: cover;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  z-index: 5;
`;
const Content = styled.div`
  /* background-color: white; */
  /* padding-top: 50px; */
  /* background: rgba(0, 0, 0, 0.1); */
  z-index: 10;
  /* color: red; */
  margin-left: 100px;
  @media screen and (max-width: 500px) {
    margin-left: 0;
  }
  width: max-content;
  /* max-width: 1000px; */
  padding: 50px;
  color: rgba(255, 255, 255, 0.9);
  /* color: white; */
  .title {
  }
  .subtitle {
  }
  .paragraph {
    margin-top: 50px;
  }
`;
const Mid = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 150px;
  margin-bottom: 200px;
  .topContent {
    margin-bottom: 30px;
  }
`;
