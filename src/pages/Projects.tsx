import React from 'react';
import styled from 'styled-components';

const Outer = styled.div`
    margin-top: 3.5em;
`

const ProjectOuter = styled.div`
    height: 10em;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ProjectCard = styled.div`
    border-radius: 10px;
    border: 2px solid #fff;
    box-shadow: 0 2px 10px -2px;
    height: 8em;
    width: 60%;
    background-color: orange;
    cursor: pointer;
    :hover{
        transform: scale(1.1);
    }
    transition: transform 0.1s ease-in-out;
`

function Projects() {
    return(
      <Outer>
          <ProjectOuter>
            <ProjectCard>
                <div>
                    hi
                </div>
            </ProjectCard>
          </ProjectOuter>
      </Outer>
    )
}

export default Projects
