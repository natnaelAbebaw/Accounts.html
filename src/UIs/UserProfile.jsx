import React from "react";
import { Card, Row, Col, Button, Stack } from "react-bootstrap";

function UserProfile() {
  return (
    <Col>
      <Card className="p-4 rounded-3">
        <Card.Body>
          {/* Header Section */}
          <Row className="align-items-center mb-5">
            <Col>
              <h4 className="fw-bold mb-1">Kyle LeSueur</h4>
              <p className="text-muted text-lowercase fs-5 mb-0">
                kylebill@gmail.com
              </p>
            </Col>
            <Col xs="auto">
              <Button variant="warning" className="fw-bold text-dark px-4">
                Login
              </Button>
            </Col>
          </Row>

          {/* Contact Information */}
          <Row className="mb-4">
            <Col>
              <h6 className="mb-1">Phone</h6>
              <p className="text-muted">+480-381-3855</p>
            </Col>
            <Col>
              <h6 className="mb-1">Dealer Phone</h6>
              <p className="text-muted">+480-381-3855</p>
            </Col>
          </Row>

          {/* Date Information */}
          <Row className="mb-4">
            <Col>
              <h6 className="mb-1">Last Access</h6>
              <p className="text-muted">Feb 8, 2025 - 14:30 PM</p>
            </Col>
            <Col>
              <h6 className="mb-1">Created At</h6>
              <p className="text-muted">Jan 15, 2024 - 09:15 AM</p>
            </Col>
          </Row>

          {/* Action Buttons */}
          <Stack direction="horizontal" gap={3}>
            <Button
              variant="outline-secondary btn-costom-secondary"
              className="flex-grow-1"
            >
              Login With PIN
            </Button>
            <Button
              variant="outline-secondary btn-costom-secondary"
              className="flex-grow-1"
            >
              Generate PIN
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default UserProfile;
