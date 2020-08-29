import React, { useState } from "react";
import styled from "styled-components";
import ProjectModal from "./ProjectModal";

interface props {
  projectName: string;
  abridgedProjectDescription: string;
  fullProjectDescription: string;
  projectLogo: string;
  projectImage: string;
  color: string;
}

const ProjectOuter = styled.div`
  height: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectHolder = styled.div`
  display: flex;
  border-radius: 10px;
  border: 2px solid #fff;
  box-shadow: 0 2px 10px -2px;
  align-items: center;
  height: 8em;
  width: 50%;
  background-color: ${({ color }) => color};
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  transition: transform 0.2s ease-in-out;
`;

const ProjectDescription = styled.div`
  @media only screen and (max-width: 768px) {
    visibility: hidden;
  }
`;

const ProjectText = styled.div`
  color: white;
  text-align: left;
  margin-left: 1em;
  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const ImageHolder = styled.img`
  width: 15%;
  height: 90%;
  margin: 0.5em;
  @media only screen and (max-width: 768px) {
    width: 70%;
    height: 70%;
  }
`;

function ProjectCard({
  projectName,
  abridgedProjectDescription,
  fullProjectDescription,
  projectLogo: logo,
  color,
  projectImage,
}: props) {
  const [showProjectModal, setProjectModal] = useState(false);

  return (
    <ProjectOuter>
      <ProjectHolder color={color} onClick={() => setProjectModal(true)}>
        <ImageHolder src={logo} alt="GitHub" />
        <ProjectText>
          <h3>{projectName}</h3>
          <ProjectDescription>{abridgedProjectDescription}</ProjectDescription>
        </ProjectText>
      </ProjectHolder>
      <ProjectModal
        show={showProjectModal}
        onHide={() => setProjectModal(false)}
        projectTitle={projectName}
        projectImage={projectImage}
        fullProjectDescription={fullProjectDescription}
      />
    </ProjectOuter>
  );
}

export default ProjectCard;
