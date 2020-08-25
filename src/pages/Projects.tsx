import React from "react";
import styled from "styled-components";

const Outer = styled.div`
  margin-top: 3.5em;
`;

const ProjectOuter = styled.div`
  height: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectCard = styled.div`
  display: flex;
  border-radius: 10px;
  border: 2px solid #fff;
  box-shadow: 0 2px 10px -2px;
  align-items: center;
  height: 8em;
  width: 50%;
  background-color: orange;
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

function Projects() {
  return (
    <Outer>
      <ProjectOuter>
        <ProjectCard>
          <ImageHolder src={require("../assets/GitHubLogo.png")} alt="GitHub" />
          <ProjectText>
            <h3>Passr</h3>
            <ProjectDescription>
              An application I worked on as part of a club.
            </ProjectDescription>
          </ProjectText>
        </ProjectCard>
      </ProjectOuter>
    </Outer>
  );
}

export default Projects;
