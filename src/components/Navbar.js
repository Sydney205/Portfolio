import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import {
  FaFacebook,
  FaGithub,
  FaLaptopCode,
  FaSkiing,
  FaBars,
} from "react-icons/fa";
import {
  MdCancel,
  MdEmail,
  MdHome,
  MdPerson,
  MdGridView,
  // MdStackedLineChart,
} from "react-icons/md";


const Navbar = () => {
  const [sidebarIcon, setSidebarIcon] = useState(<FaBars />);
  const [sidebarHeight, setSidebarHeight] = useState("-100%");
  const [num, setNum] = useState(1);

  const openSidebar = () => {
    if (num === 1) {
      setSidebarIcon(<MdCancel />);
      setSidebarHeight("0%");
      setNum(2);
    } else {
      setSidebarHeight("-100%");
      setSidebarIcon(<FaBars />);
      setNum(1);
    }
  };

  const onMobileLinkClicked = () => {
    setSidebarHeight("-100%");
    setSidebarIcon(<FaBars />);
    setNum(1);
  };

  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3 justify-content-center"
        id="nav"
      >
        <div className="my-logo">
          <h1 className="display-6"><FaLaptopCode /> &#123;Sydney&#125;</h1>
        </div>
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <NavHashLink to="#home" className="nav-link active">
              Home
            </NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink to="#about" className="nav-link">
              About
            </NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink to="#skills" className="nav-link">
              Skills
            </NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink to="#projects" className="nav-link">
              Projects
            </NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink to="#contact" className="nav-link">
              Contact me
            </NavHashLink>
          </li>
        </ul>
        <div color="white" className="nav-contact">
          <a
            href="https://web.facebook.com/people/Dieke-Sydney/100081882726090/"
            target={"_blank"}
            rel={"noreferrer"}
            className="facebook-link"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            href="https://github.com/Sydney205"
            target={"_blank"}
            rel={"noreferrer"}
            className="github-link"
          >
            <FaGithub /> GitHub
          </a>
        </div>
        <div onClick={openSidebar} className="sidebar-btn">
          {sidebarIcon}
        </div>
      </nav>

      {/* Sidebar */}

      <div className="sidebar" style={{ left: sidebarHeight }}>
        <ul style={{ left: sidebarHeight }}>
          <li className="nav-item">
            <NavHashLink
              to="#home"
              onClick={onMobileLinkClicked}
              className="nav-link active"
            >
              <MdHome /> Home
            </NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink
              to="#about"
              onClick={onMobileLinkClicked}
              className="nav-link"
            >
              <MdPerson /> About
            </NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink
              to="#skills"
              onClick={onMobileLinkClicked}
              className="nav-link"
            >
              <FaSkiing /> Skills
            </NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink
              to="#projects"
              onClick={onMobileLinkClicked}
              className="nav-link"
            >
              <MdGridView /> Projects
            </NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink
              to="#contact"
              onClick={onMobileLinkClicked}
              className="nav-link"
            >
              <MdEmail /> Contact me
            </NavHashLink>
          </li>
        </ul>
        <div color="white" className="nav-contact">
          <a
            href="https://web.facebook.com/people/Dieke-Sydney/100081882726090/"
            target={"_blank"}
            rel={"noreferrer"}
            className="facebook-link"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            href="https://github.com/Sydney205"
            target={"_blank"}
            rel={"noreferrer"}
            className="github-link"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
