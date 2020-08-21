import React from 'react';
import styled from 'styled-components';

const Outer = styled.div`
    font-family: Roboto;
    font-style: Bold;

    h1{
        font-size: 4em;
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
        <h1 style={{paddingTop:"1em"}}>Skills</h1>
        </TextHolder>
        <LogoHolder>
            <Logo src={require("../assets/GitHubLogo.png")}/>
            <Logo src={require("../assets/LinkedInLogo.png")}/>
        </LogoHolder>
      </Outer>
    )
}

export default About
