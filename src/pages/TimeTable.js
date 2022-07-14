import React from "react";
import { Container } from "react-bootstrap";

export default function TimeTable() {
  return (
    <div style={{ minHeight: window.innerHeight - 240 }}>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <img
          src="/img/time_table_final.jpg"
          width="100%"
          style={{ maxWidth: "700px" }}
        />
      </Container>
    </div>
  );
}
