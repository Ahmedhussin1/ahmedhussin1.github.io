import React from "react";
import "./about.css";
import Me from "../../assets/IMG_2286-removebg-preview.png";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiFillFolderOpen } from "react-icons/ai";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {/* =====first card===== */}
            <article className="about__card">
              <BsAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>0+ Years working Experience </small>
            </article>
            {/* =====second card===== */}
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>
            {/* =====third card===== */}
            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects </small>
            </article>
          </div>

          <p>
            Fugiat nostrud  et cupidatat officia ad. Labore aliqua incididunt
            duis aliqua consectetur ad culpa ea incididunt laborum qui. Elit
            culpa tempor amet minim deserunt consequat reprehenderit elit. Dolor
            pariatur aliquip commodo aliquip ad ullamco nulla sunt ea. Ipsum
            proident fugiat proident nisi cupidatat sunt duis nostrud culpa
            nostrud. Esse magna irure enim eiusmod amet ullamco proident cillum
            elit.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
