import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

const InventoryTable = () => {
  const data = [
    { provider: "Provider 1", apple: "Yes", google: "No", manual: "Yes" },
  ];

  return (
    <Card className="px-3 rounded-3">
      <Card.Body>
        <Row>
          <Col md={5}>
            <h5>Inventory Feed Provider</h5>
          </Col>
          <Col md={7}>
            <p className="text-muted  text-end fs-5">provider 1</p>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <h5>Apple</h5>
          </Col>
          <Col md={7}>
            <p className="text-muted  text-end fs-5">Yes</p>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <h5>Google</h5>
          </Col>
          <Col md={7}>
            <p className="text-muted  text-end fs-5">No</p>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <h5>Manual</h5>
          </Col>
          <Col md={7}>
            <p className="text-muted  text-end fs-5">Yes</p>
          </Col>
        </Row>

        <Row>
          <Col md={5}>
            <h5>DMS Image</h5>
          </Col>
          <Col md={7}>
            <p className="text-end fs-5">
              <a
                href="https://taptosign.com/DMS/1724699317765918811.png"
                className="text-end fs-5"
              >
                Image link
              </a>
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={5}>
            <h5>DMS Name</h5>
          </Col>
          <Col md={7}>
            <p className="text-muted  text-end fs-5">Desk manager</p>
          </Col>
        </Row>

        <Row>
          <Col md={5}>
            <h5>DMS Id</h5>
          </Col>
          <Col md={7}>
            <p className="text-muted  text-end fs-5">1724699317765918811</p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={5}>
            <h5> Deals Done In The Last 7 Days</h5>
          </Col>
          <Col md={7}>
            <div className="text-end">
              <Button variant="warning" className="fw-bold text-dark px-4 ">
                check
              </Button>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default InventoryTable;
