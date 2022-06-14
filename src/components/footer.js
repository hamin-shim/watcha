import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterBox>
      <Row style={{ alignItems: "center" }}>
        {/* <Col lg={3} style={{ fontSize: "50px" }}>
          새빈
        </Col> */}
        <Col>
          <Detail>
            <p>경기 파주시 문발로 330 </p>
            <p>대표자명 : 유다은 | TEL.02-6953-6979</p>
            {/* <p>COPYRIGHT &copy; 제일법무 all Rights Reserved </p> */}
          </Detail>
        </Col>
        {/* <Col>
          <SocialBox>
            <img src="http://www.lawfirmfirst.com/img/facebook.png" />
            <img src="http://www.lawfirmfirst.com/img/insta.png" />
            <img src="http://www.lawfirmfirst.com/img/twiter.png" />
          </SocialBox>
        </Col> */}
      </Row>
    </FooterBox>
  );
}
const FooterBox = styled.div`
  width: 100%;
  /* height: 100px; */
  background-color: #88817e;
  text-align: center;
  padding: 30px;
  color: whitesmoke;
  margin-top: 100px;
  /* position: absolute;
  bottom: 0; */
`;
const Detail = styled.div`
  text-align: center;
  /* @media screen and (max-width: 992px) {
    text-align: center;
  } */
`;
const SocialBox = styled.div`
  img {
    margin-left: 10px;
  }
`;
