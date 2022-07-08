import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
const SharedLayout = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "black",
      }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Outlet />
      </div>
    </Container>
  );
};

export default SharedLayout;
