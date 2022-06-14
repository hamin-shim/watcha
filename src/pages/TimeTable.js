import React from "react";
import { Container } from "react-bootstrap";

export default function TimeTable() {
  return (
    <div style={{ minHeight: window.innerHeight - 340 }}>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <img src="/img/table.png" width="100%" style={{ maxWidth: "700px" }} />
      </Container>
    </div>
  );
}
