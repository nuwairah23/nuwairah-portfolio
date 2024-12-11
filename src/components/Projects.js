import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projImg1.jpeg";
import projImg2 from "../assets/img/projImg2.jpeg";
import projImg3 from "../assets/img/projImg3.png";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState(0); 
  const devProjects = [
    {
      title: "DocUiTM",
      description:
        "A group project where we develop a webapp to improve UiTM's clinic environment",
      imgUrl: projImg1,
      urlLink: "https://github.com/nuwairah23/DocUiTM"
    },
    {
      title: "SkyHigh",
      description:
        "A group project where we develop a webapp that mimics a flight booking system",
      imgUrl: projImg2,
      urlLink: "https://github.com/nuwairah23/SkyHigh"
    }
  ];

  const dataProjects = [
    {
      title:
        "Classification and Visualization of E-Commerce Product Reviews Comparison Using Support Vector Machine",
      description:
        "A final year project that implements the use of data analysis and Machine Learning in textual analysis",
      imgUrl: projImg3,
      urlLink: "https://github.com/nuwairah23/Shopee-Rating-Reviews-Classification"
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h1 data-aos="zoom-out">Projects I've Worked On</h1>
            <p data-aos="zoom-out">Feel free to explore some of my projects here!</p>
            <div data-aos="zoom-out">
            <SlideTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div>
              {activeTab === 0 && (
                <Row>
                  {dataProjects.map((project, index) => (
                    <ProjectCard key={index} index={index} {...project} />
                  ))}
                </Row>
              )}
              {activeTab === 1 && (
                <Row>
                  {devProjects.map((project, index) => (
                    <ProjectCard key={index} index={index} {...project} />
                  ))}
                </Row>
              )}
              {activeTab === 2 && <div>In Progress!</div>}
              {activeTab === 3 && <div>Other projects coming soon!</div>}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const SlideTabs = ({ activeTab, setActiveTab }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() =>
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }))
      }
      className="custom-rounded-flex"
    >
      <Tab setPosition={setPosition} isActive={activeTab === 0} onClick={() => setActiveTab(0)}>
        Data Analysis
      </Tab>
      <Tab setPosition={setPosition} isActive={activeTab === 1} onClick={() => setActiveTab(1)}>
        Dev
      </Tab>
      <Tab setPosition={setPosition} isActive={activeTab === 2} onClick={() => setActiveTab(2)}>
        AI
      </Tab>
      <Tab setPosition={setPosition} isActive={activeTab === 3} onClick={() => setActiveTab(3)}>
        Other
      </Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, onClick, isActive }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={onClick}
      className={`custom-clickable ${isActive ? 'active' : ''}`}
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="custom-rounded-bg"
    />
  );
};
