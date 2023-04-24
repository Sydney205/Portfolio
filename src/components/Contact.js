import React, { useState, useEffect, useRef } from "react";
import Typed from "react-typed";
import emailjs from "@emailjs/browser";
import { FaPen, FaInfoCircle, FaJava, FaCheckDouble } from "react-icons/fa";
import { MdEmail, MdPerson } from "react-icons/md";
import Footer from './Footer';

// Regular Expressions...
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_ ]{2,23}$/;
const MESSAGE_REGEX = /^[a-zA-Z][a-zA-Z0-9-_!@#$%&*()<>:;'",./? ]{9,210}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const Contact = () => {
  const form = useRef();
  const userRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [message, setMessage] = useState("");
  const [validMessage, setValidMessage] = useState(false);
  const [messaeFocus, setMessaeFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = MESSAGE_REGEX.test(message);
    setValidMessage(result);
  }, [message]);

  // useEffect(() => {
  //   setErrMsg("");
  // }, [user, email, message]);

  // On submit...

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          alert("Not Sent!.. Try again!");
          setErrMsg('Message not sent!')
        }
      );
  };

  return (
    <>
            <p className="contact-topic">&#123; 05. Contact me &#125;</p>

      {/* Success Page */}

      {success ? (
        <section className="success-wrapper" id="success-section">
          <FaCheckDouble color="#0f0" size={"6rem"} className="tick" />
          <br />
          <p className="text-center" style={{ fontSize: "1rem" }}>
            <Typed
              className="typed-text"
              strings={[
                `Thanks for the message ${user} 
                    
                  i'll send a reply via mail`,
              ]}
              typeSpeed={60}
            />
          </p>
        </section>
      ) : (
        // Form...

        <section className="contact-section" id="contact">
          <div className="container" id="contact-main-info">
            <h1 className="display-3 text-center">Lets do buisness together</h1>
            <p className="lead text-center">
              How would you like your coffee{" "}
              <FaJava color="var(--invalid)" size={"3rem"} />
            </p>
            <p className="text-center" id="orange">Send an Email...</p>

            {/* -------------------------------------THE FORM----------------------------------- */}
<div className='contact-info'>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            {/* The Form... */}

            <form ref={form}>
              {/* Name Input... */}

              <div
                className={
                  userFocus && user && !validName
                    ? "inputBox_F"
                    : !userFocus && !validName && user
                    ? "inputBox_E"
                    : "inputBox"
                }
                id='input-div'
              >
                <br />
                <input
                  type={"text"}
                  id="user_name"
                  name="user_name"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
                <span className="placeholder"><MdPerson /> Name</span>
              </div>
              <br />

              {/* Warnings... */}

              <p
                id="uidnote"
                className={
                  !userFocus && !validName && user
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FaInfoCircle />{" "} Your name's too short
              </p>

              {/* Email Input... */}

              <div
                className={
                  emailFocus && email && !validEmail
                    ? "inputBox_F"
                    : !emailFocus && !validEmail && email
                    ? "inputBox_E"
                    : "inputBox"
                }
                id='input-div'
              >
                <br />
                <input
                  type={"email"}
                  id="user_email"
                  name="user_email"
                  ref={emailRef}
                  autoComplete="on"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="emailnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                />
                <span className="placeholder"><MdEmail /> Email</span>
              </div>

              {/* Warnings... */}

              <br />
              <p
                id="emailnote"
                className={
                  !emailFocus && !validEmail && email
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FaInfoCircle />{" "}
                Invalid email format
              </p>

              {/* Message textarera .. */}

              <div
                className={
                  messaeFocus && message && !validMessage
                    ? "inputBox_F"
                    : !messaeFocus && !validMessage && message
                    ? "inputBox_E"
                    : "inputBox"
                }
                id='textarea-div'
              >
                <br />
                <textarea
                  type={"text"}
                  id="message"
                  name="message"
                  ref={messageRef}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  aria-invalid={validMessage ? "false" : "true"}
                  aria-describedby="messagenote"
                  onFocus={() => setMessaeFocus(true)}
                  onBlur={() => setMessaeFocus(false)}
                ></textarea>
                <span className="placeholder"><FaPen /> Message</span>{" "}
              </div>

              {/* Warnings... */}

              <p
                id="messagenote"
                className={
                  !messaeFocus && !validMessage && message
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FaInfoCircle /> minimum of 10 characters and maximun of 100
                characters
              </p>
              <br />

              {/* Button... */}

              <div className="contact-btn">
                <button
                  disabled={
                    !validName || !validEmail || !validMessage ? true : false
                  }
                  onClick={sendEmail}
                  type="submit"
                  className="send-btn"
                >
                  Submit
                </button>
                </div>
            </form>
          <img src={`${process.env.PUBLIC_URL}/images/email-photo.PNG`} alt='email' />
          </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default Contact;
