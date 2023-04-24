import React from "react";
import Typed from "react-typed";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaSkiing,
  FaNodeJs,
  FaCode,
  FaUikit,
  FaLaptopCode,
  FaGlobe,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <p className="skills-topic">&#123; 03. What i do &#125;</p>

      <section className="skills-section" id="skills">
        <h1 className="display-4">
          <FaSkiing /> My Skills
        </h1>{" "}
        <div className="col text-center">
          <FaGlobe size={"1.5rem"} color="rgb(0, 162, 255)" /> Web development,{" "}
          <FaLaptopCode size={"1.5rem"} color="rgb(0, 162, 255)" />
          FrontEnd and BackEnd,{" "}
          <FaCode size={"1.5rem"} color="rgb(0, 162, 255)" />
          Programming and <FaUikit size={"1.5rem"} color="rgb(0, 162, 255)" />
          UI/UX Animations{" "}
        </div>
        <p
          className="display-7"
          style={{
            marginBottom: "0.65rem",
            marginTop: "2em",
            color: "var(--invalid)",
          }}
        >
          Languages i Speak...
        </p>
        <article className="basic">
          <h1
            className="display-5 text-center"
            style={{
              marginBottom: "4rem",
              marginTop: "1em",
              textDecoration: "underline",
              color: "var(--invalid)",
            }}
          >
            Basic
          </h1>
          <div className="basic-code">
            <div className="html">
              <h1 className="display-6 text-center" id="red">
                <FaHtml5 />
                HTML
              </h1>
              <p className="text-center">Hyper Text Markup Language</p>
              <div id="html-css-js-code">
                <div className="window-top">
                  <div className="red"></div>
                  <div className="yellow"></div>
                  <div className="green"></div>
                </div>
                <Typed
                  strings={[
                    `<p id='gray'>
                <span id='orange'}><</span><span id='gray'>!DOCTYPE</span> <span id='blue'>html</span><span id='orange'>></span> <br />
              <span id='orange'}><</span>html<span id='orange'>></span><br />
              <span id='orange'><span id='tab'>_</span><</span>body<span id='orange'>></span><br />
              <span id='tab'>__</span><span id='orange'><</span>h1<span id='orange'>></span><span id='white'>Hello world</span><span id='orange'><</span><span id='orange'>/</span>h1<span id='orange'>></span><br />
              <span id='tab'>_</span> </span><span id='orange'><</span><span id='orange'>/</span>body<span id='orange'>></span><br />
              </span> </span><span id='orange'><</span><span id='orange'>/</span>html<span id='orange'>></span>
              </p>
              `,
                  ]}
                  startDelay={1000}
                  typeSpeed={100}
                  backDelay={7000}
                  backSpeed={30}
                  loop
                />
              </div>
            </div>

            <div className="css">
              <h1
                className="display-6 text-center"
                style={{ color: "var(--dark-blue)" }}
              >
                <FaCss3 />
                CSS
              </h1>
              <p className="text-center">Cascading Stylesheet</p>
              <div id="html-css-js-code">
                <div className="window-top">
                  <div className="red"></div>
                  <div className="yellow"></div>
                  <div className="green"></div>
                </div>
                <Typed
                  strings={[
                    `<p id='pink'>
                <span id='blue'>body <span id='orange'>{</span></span> <br />
              <span id='tab'>_</span>width<span id='orange'>:</span> 100%<span id='orange'>;</span><br />
              <span id='tab'>_</span>min-height<span id='orange'>:</span> 100%<span id='orange'>;</span><br />
              <span id='tab'>_</span>display<span id='orange'>:</span> flex<span id='orange'>;</span><br />
              <span id='tab'>_</span>background<span id='orange'>:</span> blue<span id='orange'>;</span><br />
              <span id='tab'>_</span>color<span id='orange'>:</span> white<span id='orange'>;</span><br />
              <span id='orange'>}</span>
              </p>
              `,
                  ]}
                  startDelay={1000}
                  typeSpeed={100}
                  backDelay={7000}
                  backSpeed={30}
                  loop
                />
              </div>
            </div>

            <div className="js">
              <h1 className="display-6 text-center" style={{ color: "yellow" }}>
                <FaJsSquare />
                Javascript
              </h1>
              <p className="text-center">Javascript programming Lang.</p>
              <div id="html-css-js-code">
                <div className="window-top">
                  <div className="red"></div>
                  <div className="yellow"></div>
                  <div className="green"></div>
                </div>
                <Typed
                  strings={[
                    `<p id='gray'>
                <span id='red'>function</span> add <span id='red'>(</span><span id='green'>x, y</span></span><span id='red'>) </span><span id='orange'>{</span></span> <br />
                <span id='tab'>_</span>result<span id='red'> = </span> x<span id='red'> + </span> y<span id='orange'>;</span><br />
                <span id='tab'>_</span>console<span id='white'>.</span><span id='blue'>log</span><span id='red'>(</span><span id='orange'>result</span><span id='red'>)</span><span id='orange'>;</span><br />
                <span id='orange'>}</span><br />
                <span id='tab'>__</span><span id='orange'>add</span><span id='red'>(</span><span id='green'>6, 5</span></span><span id='red'>)</span><span id='orange'>;</span>
              </p>
              `,
                  ]}
                  startDelay={1000}
                  typeSpeed={100}
                  backDelay={7000}
                  backSpeed={30}
                  loop
                />
              </div>
            </div>
          </div>
        </article>
        <article className="basic" style={{ marginTop: "4rem" }}>
          <h1
            className="display-5 text-center"
            style={{ marginBottom: "2rem", textDecoration: "underline" }}
          >
            FrontEnd
          </h1>
          <div className="basic-code">
            <div className="react">
              <h1
                className="display-6 text-center"
                style={{ color: "var(--light-blue)" }}
              >
                <FaReact className="react-logo" />
                React.js
              </h1>
              <p className="text-center">Javascript Library</p>
              <div id="frontend-code">
                <div className="window-top">
                  <div className="red"></div>
                  <div className="yellow"></div>
                  <div className="green"></div>
                </div>
                <Typed
                  strings={[
                    `<p id='gray'>
                <span id='red'>import</span> React <span id='red'>from</span><span id='blue'> "react"</span><br />
                <span id='red'>const </span><span id='pink'>App</span> <span id='red'> = </span><span id='blue'>()</span><span id='red'> => </span><span id='orange'>{</span><br />

                <span id='tab'>_</span><span id='red'>return </span>(<br />
                <span id='tab'>__</span><<span id='green'>div</span>><span id='white'>React JS</span><span id='gray'><<span id='gray'>/</span></span><span id='green'>div</span>><br />
                <span id='tab'>_</span>)<br />
                </span><span id='orange'>}</span><br />

                <span id='red'>export</span> default <span id='pink'>App</span>
                
              </p>
              `,
                  ]}
                  startDelay={1000}
                  typeSpeed={100}
                  backDelay={7000}
                  backSpeed={30}
                  loop
                />
              </div>
            </div>
            <div className="bootstrap">
              <h1 className="display-6 text-center" style={{ color: "purple" }}>
                <FaBootstrap />
                Bootstrap
              </h1>
              <p className="text-center">CSS Framework</p>
              <div id="frontend-code">
                <div className="window-top">
                  <div className="red"></div>
                  <div className="yellow"></div>
                  <div className="green"></div>
                </div>
                <Typed
                  strings={[
                    `<p id='gray'>
              <span id='orange'><</span><span id='gray'>div</span><span id='orange'> class<span id='orange'>='row'</span>><br />
              <span id='tab'>__</span><span id='orange'><</span><span id='gray'>div</span><span id='orange'> class<span id='orange'>='col-*-*'</span>></span><span id='orange'><</span><span id='orange'>/</span><span id='gray'>div</span><span id='orange'>></span><br />
              <span id='tab'>__</span><span id='orange'><</span><span id='gray'>div</span><span id='orange'> class<span id='orange'>='col-*-*'</span>></span><span id='orange'><</span><span id='orange'>/</span><span id='gray'>div</span><span id='orange'>></span><br />
              <span id='orange'><</span><span id='orange'>/</span><span id='gray'>div</span><span id='orange'>></span><br />

              <span id='orange'><</span><span id='gray'>div</span><span id='orange'> class<span id='orange'>='row'</span>><br />
              <span id='tab'>__</span><span id='orange'><</span><span id='gray'>div</span><span id='orange'> class<span id='orange'>='col-*-*'</span>></span><span id='orange'><</span><span id='orange'>/</span><span id='gray'>div</span><span id='orange'>></span><br />
              <span id='tab'>__</span><span id='orange'><</span><span id='gray'>div</span><span id='orange'> class<span id='orange'>='col-*-*'</span>></span><span id='orange'><</span><span id='orange'>/</span><span id='gray'>div</span><span id='orange'>></span><br />
              <span id='tab'>__</span><span id='orange'><</span><span id='gray'>div</span><span id='orange'> class<span id='orange'>='col-*-*'</span>></span><span id='orange'><</span><span id='orange'>/</span><span id='gray'>div</span><span id='orange'>></span><br />
              <span id='orange'><</span><span id='orange'>/</span><span id='gray'>div</span><span id='orange'>></span><br />
              </p>
              `,
                  ]}
                  startDelay={1000}
                  typeSpeed={100}
                  backDelay={7000}
                  backSpeed={30}
                  loop
                />
              </div>
            </div>
          </div>
        </article>
        <article className="basic" style={{ marginTop: "4rem" }}>
          <h1
            className="display-5 text-center"
            style={{ marginBottom: "2rem", textDecoration: "underline" }}
          >
            BackEnd
          </h1>
          <div className="basic-code">
            <div className="node">
              <h1
                className="display-6 text-center"
                style={{ color: "var(--light-green)" }}
              >
                <FaNodeJs />
                Node.js
              </h1>
              <p className="text-center">Javascript Runtime</p>
              <div id="backend-js-code">
                <div className="window-top">
                  <div className="red"></div>
                  <div className="yellow"></div>
                  <div className="green"></div>
                </div>
                <Typed
                  strings={[
                    `<p id='gray'>
                <span id='red'>const </span><span id='blue'>http</span> <span id='red'> = </span><span id='pink'>require(<span id='blue'>'http'</span>)</span><br />
                
                <span id='blue'>http</span>.<span id='pink'>createServer</span><span id='green'>(</span><span id='blue'>function</span> <span id='green'>(req, res)</span><span id='gray'> {</span><br />

                <span id='tab'>_</span><span id='gray'>res.</span><span id='blue'>writeHead(<span id='red'>200</span>, <span id='blue'>{</span><span id='green'>'Content-Type' </span>:<span id='red'>'text/html'</span>})<br />
                 
                <span id='tab'>_</span><span id='gray'>res.send(<span id='red'>'Hello World'</span>)<br />
                }).listen(<span id='red'>3500</span><span>)</span><br />
                <span>}</span><span><span id='green'>)</span></span>
              </p>
              `,
                  ]}
                  startDelay={1000}
                  typeSpeed={100}
                  backDelay={7000}
                  backSpeed={30}
                  loop
                />
              </div>
            </div>
            <div className="express">
              <h1 className="display-6 text-center" style={{ color: "white" }}>
                <SiExpress />
                press
              </h1>
              <p className="text-center">NodeJs Framework</p>
              <div id="backend-js-code">
                <div className="window-top">
                  <div className="red"></div>
                  <div className="yellow"></div>
                  <div className="green"></div>
                </div>
                <Typed
                  strings={[
                    `<p id='gray'>
                <span id='red'>const </span><span id='blue'>express</span> <span id='red'> = </span><span id='pink'>require(<span id='blue'>'express'</span>)</span><br />
                <span id='red'>const </span><span id='blue'>app</span> <span id='red'> = </span><span id='pink'>express()</span><br />
                <span id='red'>const </span><span id='blue'>PORT</span> <span id='red'> = </span><span id='gray'>process.env.</span><span id='blue'>PORT</span><span id='red'> || </span><span id='gray'>3500</span><br /><br />
                
                <span id='blue'>app</span>.<span id='pink'>listen</span><span id='green'>(</span><span id='blue'>PORT</span>, <span id='green'>()</span> <span id='red'> => </span><span id='green'>{</span><br />
                <span id='tab'>_</span><span id='gray'>console.</span><span id='blue'>log(<span id='green'>'server running on port <span id='red'>$</span><span id='red'>{</span><span id='blue'>PORT</span><span id='red'>}</span>'</span><span>)</span><br />
                <span>}</span><span><span id='green'>)</span></span>
              </p>
              `,
                  ]}
                  startDelay={1000}
                  typeSpeed={100}
                  backDelay={7000}
                  backSpeed={30}
                  loop
                />
              </div>
            </div>
            <div className="mongoDB">
              <h1
                className="display-6 text-center"
                style={{ color: "var(--default-green)" }}
              >
                <SiMongodb />
                MongoDB
              </h1>
              <p className="text-center">Database</p>
              <div id="backend-js-code">
                <div className="window-top">
                  <div className="red"></div>
                  <div className="yellow"></div>
                  <div className="green"></div>
                </div>
                <Typed
                  strings={[
                    `<p id='gray'>
                <span id='red'>const </span><span id='blue'>MongoClient</span> <span id='red'> = </span><span id='pink'>require(<span id='blue'>'mongodb'</span>)</span>.MongoClient<br />
                <span id='red'>const </span><span id='blue'>url</span> <span id='red'> = </span><span id='blue'>"mongodb://localhost:3500/mydb"</span><br /><br />
                
                <span id='blue'>MongoClient</span>.<span id='pink'>connect</span><span id='green'>(</span><span id='blue'>url</span>, <span id='green'>(err, db)</span> <span id='red'> => </span><span id='green'>{</span><br />
                <span id='pink'>if </span>(<span id='blue'>err</span>)<span id='red'> throw </span> <span id='blue'>err</span><br />
                <span id='tab'>_</span><span id='gray'>console.</span><span id='blue'>log(<span id='green'>"Database created!"</span><span>)</span><br />
                <span id='blue'>db.<span id='orange'>close()</span></span><br />
                <span>}</span><span><span id='green'>)</span></span>
              </p>
              `,
                  ]}
                  startDelay={1000}
                  typeSpeed={100}
                  backDelay={7000}
                  backSpeed={30}
                  loop
                />
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Skills;
