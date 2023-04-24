import React from "react";
import TinyLogo from "./TinyLogo";

const Projects = () => {
  return (
    <>
      <p className="projects-topic">&#123; 04. My Projects &#125;</p>
    <section className="projects-section" id="projects">
      <h1 className="display-4">My Projects</h1>

      <div className="project">
        <div className="pro-image">
          <a
            href="https://wall-management.vercel.app"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/wall-m.png`}
              alt="project-1"
            />
          </a>
          <div className="pro-title">
            <TinyLogo /> Wall Management
          </div>
        </div>
        <p>
          <span id="orange">Wall Management:</span> A Building and Branding
          Company that is thrilled<br />to lead a complex initiatives...
          <a href="https://wall-management.vercel.app">see more.</a>
        </p>
      </div>
    </section>
    </>
  );
};

export default Projects;
