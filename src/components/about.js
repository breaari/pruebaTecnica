import React from 'react';
import Style from "./about.module.css"
import { useRef } from 'react';

const About = ({usuario}) => {


    return (
      <div className={Style.aboutcontainer}>
        <div className={Style.tittlecontainer}>
          <h2 className={Style.abouttittle}>Sobre mí</h2>
        </div>
        <p className={Style.abouttext}>{usuario.sobreMi}</p>
      </div>
    );
  };

export default About;
