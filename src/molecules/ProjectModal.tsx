import React from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";

interface props {
  show: boolean;
  onHide: () => void;
}
function ProjectModal(props: props) {
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Passr</Modal.Title>
      </Modal.Header>
      <Modal.Body>hello</Modal.Body>
    </Modal>
  );
}

export default ProjectModal;
