import { Col, Container, Row } from "react-bootstrap";
import tableau from "../assets/skills/tableau.svg";
import python from "../assets/skills/python.svg";
import powerbi from "../assets/skills/power-bi.svg";
import nodejs from "../assets/skills/nodejs.svg";
import css from "../assets/skills/css.svg";
import html from "../assets/skills/html.svg";
import java from "../assets/skills/java.svg";
import javascript from "../assets/skills/javascript.svg";
import mysql from "../assets/skills/mysql.svg";
import git from "../assets/skills/git.svg";
import postgresql from "../assets/skills/postgresql.svg";
import spss from "../assets/skills/spss.svg";
import nestjs from "../assets/skills/nestjs.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Skills = () => {
  const skills = [
    { name: "Python", icon: python },
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "Java", icon: java },
    { name: "NodeJS", icon: nodejs },
    { name: "NestJS", icon: nestjs },
    { name: "PostgreSQL", icon: postgresql },
    { name: "MySQL", icon: mysql },
    { name: "Git", icon: git },
    { name: "Tableau", icon: tableau },
    { name: "Power BI", icon: powerbi },
    { name: "SPSS", icon: spss },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="skill" id="skills">
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="text-left">
            <h1 data-aos="fade-right">Tools and Skillset</h1>
            <p data-aos="fade-right">
              Data Analytics is my primary area, but I’m also confident working
              in Backend Development.
            </p>
          </Col>
          <Col>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card" data-aos="fade-down" data-aos-delay={100 * (index + 1)} > 
                  <img
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    className="skill-logo"
                  />
                  <h5>{skill.name}</h5>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
