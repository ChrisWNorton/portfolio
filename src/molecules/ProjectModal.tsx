import React from "react";
import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";

interface props {
  show: boolean;
  onHide: () => void;
}

const InfoHolder = styled.div`
  display: flex;
  align-items: center;
`;

function ProjectModal({ show, onHide }: props) {
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1>Passr</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InfoHolder>
          <img
            src={require("../assets/GestureRecognition.png")}
            style={{ width: "100%", padding: "2em" }}
            alt="Poster"
          />
        </InfoHolder>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;
