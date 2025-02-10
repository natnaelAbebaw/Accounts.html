import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { MdStar, MdStarOutline } from "react-icons/md";

function Dealership() {
  const [isOnWatchlist, setIsOnWatchlist] = useState(false);
  return (
    <Row className="">
      <Col>
        <Card className="rounded-3 p-3">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title className="fw-bold fs-4 mb-3">
                  LeSueur Car Company
                </Card.Title>
                <Card.Subtitle className="text-muted fs-6">
                  Dealer ID: lesueur__1109_85281
                </Card.Subtitle>
              </div>

              {isOnWatchlist ? (
                <MdStar
                  onClick={() => setIsOnWatchlist(false)}
                  size={24}
                  color="gold"
                  cursor={"pointer"}
                />
              ) : (
                <MdStarOutline
                  size={24}
                  color="gold"
                  onClick={() => setIsOnWatchlist(true)}
                  cursor={"pointer"}
                />
              )}
            </div>

            {/* Address */}
            <Card.Text className="mt-3">
              <strong>Address:</strong> <br />
              1109 E Curry Rd <br />
              Tempe, AZ 85281
            </Card.Text>

            {/* Reason Input */}
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Enter reason:</Form.Label>
                <Form.Control type="text" placeholder="Reason..." />
              </Form.Group>
            </Form>

            {/* Time Left */}
            <p className="mb-3">
              Time left: <strong>2 days</strong>
            </p>

            {/* Save Button */}
            <Button variant="warning" className="fw-semibold px-4">
              Save
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Dealership;
