import { Container, Row } from 'react-bootstrap';
import videoUrl from "../assets/img/purple-pink-bg.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Contact = () => {
        useEffect(() => {
          AOS.init();
        }, []);
        
    return (
        <section className='contact' id='contact'>
            <div className="video-container">
                <video src={videoUrl} type="video/mp4" autoPlay loop muted></video>
            </div>
            <Container>
                <Row>
                    <h1 data-aos="fade-down"><span>Let's Get</span> in Touch!</h1>
                    <h4 data-aos="zoom-out">Feel free to reach out through my socials or email </h4>
                    <p data-aos="zoom-out">nuwairah2001@gmail.com</p>
                </Row>
            </Container>
        </section>

    )
}