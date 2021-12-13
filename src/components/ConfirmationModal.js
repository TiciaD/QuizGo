import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import userQuizContext from "../utilities/user-quiz-context";

function ConfirmationModal() {
  const { showModal, setModal } = useContext(userQuizContext);
  return (
    <div>
      <Modal show={showModal} onHide={() => setModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setModal(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ConfirmationModal;
