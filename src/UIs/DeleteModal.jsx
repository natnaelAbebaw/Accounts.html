import React, { useState } from "react";
import { Badge, Button, Card, Modal, Stack, Table } from "react-bootstrap";
import { Header } from "../components";
import { Highlight } from "../components/vendor";
import { ModalMembers } from "../modals";

export default function DeleteModal({ children, ...props }) {
  const [modalMembersVisible, setModalMembersVisible] = useState(false);
  const [modalSearchVisible, setModalSearchVisible] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  return (
    <div id="modals" {...props}>
      <div onClick={() => setModalMembersVisible(true)}>{children}</div>
      <Modal
        show={modalMembersVisible}
        onHide={() => setModalMembersVisible(false)}
        className="modal-width"
        centered
      >
        <Modal.Body className="text-center p-4 delete-modal">
          <h5 className="mb-5">
            Are you sure you want to delete this account?
          </h5>
          <Stack
            direction="horizontal"
            className="gap-2 justify-content-center"
          >
            <Button
              variant="secondary"
              onClick={() => setModalMembersVisible(false)}
            >
              Cancel
            </Button>
            <Button variant="danger">Yes, Delete</Button>
          </Stack>
        </Modal.Body>
      </Modal>
    </div>
  );
}
