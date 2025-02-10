import FeatherIcon from "feather-icons-react";
import React, { useMemo, useState } from "react";
import {
  Button,
  Card,
  CloseButton,
  Col,
  Form,
  ListGroup,
  Modal,
  Nav,
  Row,
} from "react-bootstrap";
import { useGlobalFilter, usePagination, useTable } from "react-table";
import { Header } from "../components";
import { MdStar } from "react-icons/md";
import InventoryTable from "../UIs/InventoryTable";
import UserSettings from "../UIs/UserSettings";
import UserProfile from "../UIs/UserProfile";
import Dealership from "../UIs/Dealership";

export default function ModalMembers({ visible, onDismiss, ...props }) {
  const [currentTab, setCurrentTab] = useState("profile");
  console.log(currentTab);
  return (
    <Modal
      show={visible}
      onHide={onDismiss}
      centered
      {...props}
      className="w-100"
    >
      <Card className="modal-card w-100">
        <Card.Body>
          <ListGroup className="list-group-flush px-3">
            <div className="d-flex justify-content-between align-items-center ">
              <Header className="mb-0">
                <h3 className="mb-0">Kyle LeSueur</h3>
              </Header>

              <CloseButton className="fs-3" onClick={onDismiss} />
            </div>
            <Nav variant="tabs" className="nav-tabs-sm mb-4">
              <Nav.Item>
                <Nav.Link
                  onClick={() => setCurrentTab("profile")}
                  href="#!"
                  active={currentTab === "profile"}
                >
                  Profile
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => setCurrentTab("dealership")}
                  active={currentTab === "dealership"}
                  href="#!"
                >
                  Dealership
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => setCurrentTab("authetications")}
                  href="#!"
                  active={currentTab === "authetications"}
                >
                  Auth and DMS info
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={currentTab === "setting"}
                  onClick={() => setCurrentTab("setting")}
                  href="#!"
                >
                  Setting
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {currentTab === "profile" && <UserProfile />}

            {currentTab === "dealership" && <Dealership />}

            {currentTab === "authetications" && (
              <Row>
                <InventoryTable />
              </Row>
            )}

            {currentTab === "setting" && <UserSettings />}
          </ListGroup>
        </Card.Body>
      </Card>
    </Modal>
  );
}
