import React from 'react';
import styled from 'styled-components';

const Outer = styled.div`
    font-family: Roboto;
    font-style: Bold;

    h1{
        font-size: 4em;
    }
`

const Text = styled.div`
    padding: 2rem 4em 0 4em;
    text-align:left;
    font-size:1.3em;
`

const TextHolder = styled.div`
    display: flex;
    flex-flow: column;
    margin: 2em;
`

function About() {
    return(
      <Outer>
        <img src={require("../assets/AboutImage.jpg")} style={{ width: '100%', height: '40%' }} />
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
        </TextHolder>
      </Outer>
    )
}

export default About
