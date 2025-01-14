import React from "react";
import profile from "../assets/img/profile.jpg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

export const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="about" id="about" data-aos="fade-down">
      <Container>
        <Row>
          <Col md={6} className="d-flex justify-content-center align-items-center ps-0 pe-0">
            <div className="content-container">
              <div className="text-content">
                <h1 data-aos="zoom-in">Who Am I?</h1>
                <p data-aos="zoom-in">
                  I'm a <strong>Computer Science</strong> graduate with a deep passion for
                  <strong> Data Analytics</strong>. My interest in the field grew from studying
                  Statistics and my love for mathematics during my studies. Before diving
                  into data, I was also interested in <strong>Backend Development</strong> because
                  I have a stronger understanding of the logical side and enjoy working
                  on it. I'm still figuring out which suits me best, but either way, I’m
                  happy to try new challenges and opportunities.
                </p>
                <button data-aos="zoom-in" className="view-cv-btn"><a href="https://drive.google.com/file/d/1Of3Vk-OvgZ1k3CoF9E6WGhRG57FSzyXU/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV</a></button>
                <div data-aos="zoom-in" className="social-icons">
                  <a href='https://www.linkedin.com/in/nuwairah-ahmad/' target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt=""></img></a>
                  <a href='https://www.facebook.com/share/15demBAAyw/?mibextid=LQQJ4d' target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt=""></img></a>
                  <a href='https://github.com/nuwairah23/' target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt=""></img></a>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center ps-0 pe-0">
          <div className="image-container">
            <img
              src={profile}
              alt="Your Profile"
              className="profile-image"
            />
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
