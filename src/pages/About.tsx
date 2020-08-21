import React from 'react';
import styled from 'styled-components';
import { SkillBars } from 'react-skills';

const Outer = styled.div`
    font-family: Roboto;
    font-style: Bold;

    h1{
        font-size: 4em;
    }

    h2{
        font-size: 2em;
    }
    @media only screen and (max-width: 768px){
        font-size: 13px;
    }
`

const Text = styled.div`
    padding: 2rem 4em 0 4em;
    text-align:left;
    font-size:1.3em;
    @media only screen and (max-width: 768px){
        padding: 2rem 1em 0 1em;
    }

`

const TextHolder = styled.div`
    display: flex;
    flex-flow: column;
    margin: 2em;
`

const Img = styled.img`
    width: 100%;
    height:20%;
`

const LogoHolder = styled.div`
    display: flex;
    justify-content: center;
`

const Logo = styled.img`
    height: 4em;
    width: 4em;
    margin: 1em;
`

const ProgrammingSkills = [
    {
        name: 'Typescript',
        level: 60,
        color: 'blue',
        labelWidth: 0,
    },
    {
        name: 'Python',
        level: 60,
        color:'orange'
    }, 
    {
        name: 'Java',
        level: 50,
        color: 'pink'
    },
    {
        name: 'Kotlin',
        level: 60,
        color: 'grey',

    },
]

const FrameworkSkills = [
    {
        name: 'React',
        level: 60,
        color: 'blue',
        labelWidth: 0,
    },
    {
        name: 'Django',
        level: 60,
        color:'orange'
    }, 
    {
        name: 'Angular',
        level: 40,
        color: 'pink'
    },
    {
        name: 'Express',
        level: 60,
        color: 'grey',

    },
]

const Skills = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

function About() {
    return(
      <Outer>
        <Img src={require("../assets/AboutImage.jpg")}/>
        <TextHolder>
          <h1>About Me</h1>
          <Text>
            Hi! My name is Christopher Norton, and I was born and raised in Calgary, Alberta, and lived there
            until I started the Software Engineering program at the University of Victoria. While growing up,
            I had several hobbies, including: soccer, mountain biking, swimming and programming simple games.
            I played soccer my entire life, and have always enjoyed being part of a team and would describe
            myself as a team player.
          </Text>
          <Text>
            I have always been very interested in technology, and learned my first programming language (Lua)
            when I was just 13 years old. This love and curiosity towards technology has been a trait I
            continue to have and nurture. Currently, my main interest and area of focus in full stack web
            development, but I am also very interested in machine learning and the applications of it in
            modern society.
          </Text>
          <Text>
            I have always been very interested in technology, and learned my first programming language (Lua)
            when I was just 13 years old. This love and curiosity towards technology has been a trait I
            continue to have and nurture. Currently, my main interest and area of focus in full stack web
            development, but I am also very interested in machine learning and the applications of it in
            modern society.
          </Text>
        </TextHolder>
        <h2>Programming Languages</h2>
        <Skills>
        <div style={{width:'60%'}}>
            <SkillBars skills={ProgrammingSkills}/>
            </div>
        </Skills>
        <h2>Frameworks</h2>
        <Skills>
        <div style={{width:'60%'}}>
            <SkillBars skills={FrameworkSkills}/>
            </div>
        </Skills>
        <LogoHolder>
            <a href="https://www.github.com/ChrisWNorton"><Logo src={require("../assets/GitHubLogo.png")}/></a>
            <a href="https://www.linkedin.com/in/chriswnorton/"><Logo src={require("../assets/LinkedInLogo.png")}/></a>
        </LogoHolder>
      </Outer>
    )
}

export default About
