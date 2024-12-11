import { Col } from "react-bootstrap";
import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import navIcon3 from '../assets/img/nav-icon3.svg';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const ProjectCard = ({ title, description, imgUrl, urlLink, index }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Col data-aos="fade-down" data-aos-delay={100 * (index + 1)}  md={4} className="d-flex justify-content-center align-items-center ps-0 pe-0">
      <TiltCard title={title} description={description} imgUrl={imgUrl} urlLink={urlLink}/>
    </Col>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = ({ title, description, imgUrl, urlLink }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="proj-imgbx" 
      >
        <img
          src={imgUrl}
          alt={title}
        />
        <div
        className="proj-txtx"
      >
        <h4>
          {title}
        </h4>
        <span>
          {description}
        </span>
        <div className="github-icon">
          <a href={urlLink} target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt=""/></a>
        </div>
        </div>
      </div>
    </motion.div>
  );
};
