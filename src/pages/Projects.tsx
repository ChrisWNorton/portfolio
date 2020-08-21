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
    display: flex;
    border-radius: 10px;
    border: 2px solid #fff;
    box-shadow: 0 2px 10px -2px;
    height: 8em;
    width: 50%;
    background-color: orange;
    cursor: pointer;
    :hover{
        transform: scale(1.1);
    }
    transition: transform 0.2s ease-in-out;
`

function Projects() {
    return(
      <Outer>
          <ProjectOuter>
            <ProjectCard>
                <div style = {{width:'20%'}}>
                    <img src={require('../assets/GitHubLogo.png')} style={{width:'100%', height:'100%'}}/>
                </div>
                <div style= {{padding:'1em', color:'white', width:'100%', textAlign:'left'}}>
                    <div>
                        <h3>Passr</h3>
                    </div>
                    <div>
                        An application I worked on as part of a club.
                    </div>
                </div>
                
            </ProjectCard>
          </ProjectOuter>
      </Outer>
    )
}

export default Projects
