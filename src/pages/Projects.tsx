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
        projectName="Facial Gesture Recognition"
        abridgedProjectDescription="A machine learning application to recognize facial gestures."
        fullProjectDescription="This was a project completed as my capstone project to complete the Software Engineering program
        at the University of Victoria. The goal of the project was to use gesture recognition with the goal of helping elderly,
        autistic, or individuals with other disabilities express themselves. This project consisted of three majors modules:
        training the model, getting the users face and supplying it to the model, as well as validating the modal.
        To train the model we used a convolutional neural network (CNN) with multiple filters. We also used regulalarizors as well as
        common methdologies to normalize all input values, and help prevent bias of larger inputs; in an attempt to prevent overfitting the model.
        "
        projectLogo={require("../assets/FacialGestureLogo.png")}
        projectImage={require("../assets/GestureRecognition.png")}
        color="grey"
      />
    </Outer>
  );
}

export default Projects;
