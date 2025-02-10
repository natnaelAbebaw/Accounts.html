import FeatherIcon from "feather-icons-react";
import React from "react";
import {
  Badge,
  Button,
  Card,
  Collapse,
  Container,
  Dropdown,
  Nav,
  NavDropdown,
  Navbar,
  OverlayTrigger,
  Table,
  Tooltip,
} from "react-bootstrap";
import BrandLogo from "./BrandLogo";

export default function Footer({ ...props }) {
  return (
    <Container
      fluid
      data-bs-theme="vibrant"
      expand="lg"
      className="w-100 p-0 position-fixed z-index-5 bottom-0"
    >
      <Navbar bg="black" expand="xl" style={{ border: 0 }}>
        <Container className="custom-width" fluid>
          <div className="d-flex flex-column ms-1 gap-2 justify-content-end">
            <h1
              data-bs-theme="light"
              className="fs-4 fw-normal mb-0 mainHeading"
            >
              Tap to Sign &copy; 2025
            </h1>
          </div>
        </Container>
      </Navbar>
    </Container>
  );
}
