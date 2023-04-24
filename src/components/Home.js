import React from "react";
import Typed from "react-typed";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <p className="topic">&#123; 01. Welcome &#125;</p>

      <div className="intro">
        <Typed
          className="typed-text display-4"
          strings={["Hi! I'm Sydney"]}
          startDelay={1000}
          typeSpeed={100}
          backDelay={7000}
          backSpeed={30}
          loop
        />
        <br />
        <p className="display-6 job">
          &#123;{" "}
          <span style={{ color: "var(--invalid)" }}>FullStack Developer</span>{" "}
          &#125;
        </p>
        <p>
          Web development and Apps
          <br />
          FrontEnd and BackEnd
          <br />
          Programming and UI/UX Animations
        </p>
      </div>

      <div className="intro-2">
        {/* <img
          src={`${process.env.PUBLIC_URL}/images/site-logo.png`}
          alt="laptop"
          className="laptop"
        /> */}
      </div>
    </section>
  );
};

export default Home;
