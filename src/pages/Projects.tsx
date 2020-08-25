import React from "react";
import styled from "styled-components";
import ProjectCard from "../molecules/ProjectCard";

const Outer = styled.div`
  margin-top: 3.5em;
`;

function Projects() {
  return (
    <Outer>
      <ProjectCard
        projectName="Passr"
        description="An application I worked on as part of a club."
        logo={require("../assets/GitHubLogo.png")}
      />
    </Outer>
  );
}

export default Projects;
