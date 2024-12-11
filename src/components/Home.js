import { Container, Row, Col } from "react-bootstrap";
import videoUrl from "../assets/img/purple-pink-bg.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const Home = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    
    return (
        <section className="banner" id="home">
            <div className="video-container">
                <video src={videoUrl} type="video/mp4" autoPlay loop muted></video>
            </div>
            <Container>
                <Row>
                    <Col>
                    <div className="header-container">
                    <h1 data-aos="fade-down">Hey there, <span> I'm Nuwairah.</span></h1>
                    <p data-aos="fade-up">I’ve put together this portfolio to share my projects and connect with others in the field. Take a look around, and feel free to reach out if you're interested in chatting or collaborating!</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}