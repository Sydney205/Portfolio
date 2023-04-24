import React from "react";
import { HashLink } from "react-router-hash-link";

const About = () => {
  return (
    <>
      <p className="about-topic">&#123; 02. About myself &#125;</p>

      <section className="about-section" id="about">
        <div className="left-side">
          <img
            src={`${process.env.PUBLIC_URL}/images/ProPic.PNG`}
            alt="my pic"
          />
        </div>
        <div className="right-side">
          <h1 className="display-4">About ME!</h1>
          <p style={{ color: "var(--invalid)" }}>Hi! i'm Sydney</p>
          <p>
            I'm a FullStack JS developer, who works on both the front-end
            (client-side) and backend (server-side) of a website or an application.
            <br />I enjoy building everything from websites to rich interactive
            apps.<br />
            So if you are a person or a buisness seeking web presence...
          </p>
          <button><HashLink to='#contact'>Hire Me</HashLink></button>
        </div>
      </section>
    </>
  );
};

export default About;
