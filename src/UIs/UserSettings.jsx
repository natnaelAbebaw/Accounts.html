import React, { useState } from "react";
import { Card, Form, Button, Stack, Modal } from "react-bootstrap";

function UserSettings() {
  const [isLoginDisabled, setIsLoginDisabled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isManager, setIsManager] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(false);
    console.log("User Deleted!");
  };

  return (
    <div className="">
      <Card className="p-4 rounded-3">
        <Card.Body>
          <h4 className=" fw-bold mb-5">User Settings</h4>

          {/* Login Disabled Toggle */}
          <Form.Check
            type="switch"
            id="login-disabled"
            label="Login Disabled?"
            checked={isLoginDisabled}
            onChange={() => setIsLoginDisabled(!isLoginDisabled)}
            className="mb-4 fs-5"
          />

          {/* Admin Checkbox */}
          <Form.Check
            type="checkbox"
            id="is-admin"
            label="Is Admin?"
            checked={isAdmin}
            onChange={() => setIsAdmin(!isAdmin)}
            className="mb-3 fs-5"
          />

          {/* Manager Checkbox */}
          <Form.Check
            type="checkbox"
            id="is-manager"
            label="Is Manager?"
            checked={isManager}
            onChange={() => setIsManager(!isManager)}
            className="mb-5 fs-5"
          />

          {/* Delete Button */}
          <Stack direction="horizontal" className="gap-2">
            <Button
              variant="danger"
              className=" fw-bold"
              onClick={() => setShowModal(true)}
            >
              Delete Account
            </Button>
          </Stack>
        </Card.Body>
      </Card>

      {/* Delete Confirmation Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
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
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Yes, Delete
            </Button>
          </Stack>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UserSettings;
