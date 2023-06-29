import React from "react";
import projectsList from "./projectsList";

const Projects = () => {
  const proLists = projectsList.map((item, index) => (
    <div className="pro-image">
      <a href={`${item.link}`} target={"_blank"} rel={"noreferrer"}>
        <img src={process.env.PUBLIC_URL + `${item.imageUrl}`} alt="projects" />
      </a>
      <div>
        <p>
          <span
            id="orange"
            style={{ textDecoration: "underline" }}
          >
            {item.name}
          </span>
          {item.desc}
          <a
            href={`${item.link}`}
            target={"_blank"}
            rel={"noreferrer"}
            style={{ color: "var(--fav-blue) !important" }}
          >
            View
          </a>
        </p>
      </div>
    </div>
  ));

  return (
    <>
      <p className="projects-topic">&#123; 04. My Projects &#125;</p>
      <section className="projects-section" id="projects">
        <h1 className="display-4">My Projects</h1>

        <div className="project">{proLists}</div>
      </section>
    </>
  );
};

export default Projects;
