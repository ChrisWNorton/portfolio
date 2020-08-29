import React from "react";
import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";

interface ModalProps {
  show: boolean;
  onHide: () => void;
  projectTitle: string;
  fullProjectDescription: string;
  projectImage: string;
}

const InfoHolder = styled.div`
  display: flex;
  flex-flow: column;
  text-align: left;
`;

function ProjectModal({
  show,
  onHide,
  projectTitle,
  fullProjectDescription,
  projectImage,
}: ModalProps) {
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1>{projectTitle}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InfoHolder>
          <img
            src={projectImage}
            style={{ width: "100%", padding: "2em" }}
            alt="Poster"
          />
          <div>{fullProjectDescription}</div>
        </InfoHolder>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;
