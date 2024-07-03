import React from 'react';

const About = ({usuario}) => {
    return (
      <div>
        <h2>Sobre Mí</h2>
        <p>{usuario.sobreMi}</p>
      </div>
    );
  };

export default About;
