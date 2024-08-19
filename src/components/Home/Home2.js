import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
    AiFillInstagram,
    AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Slideshow from "./Slideshow";

function Home2() {

    return (
    
    <Container fluid className="home-about-section" id="about">
            <Container>
            
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Tillad mig at <span className="purple"> INTRODUCERE </span> mig selv!
            </h1>
            <p className="home-about-body">
                          Jeg har leget med software udvikling siden de tidligere teenage år. Rejsen er gået fra GameMaker, til Codecademy og nu til 
                          <i>
                              <b className="purple"> Datamatiker </b>
                          </i>
                          ved UCL Odense
              <br />
              <br />Jeg har stiftet bekendtskab med en del sprog, men har lagt størst kræfter i 
              <i>
                  <b className="purple"> C# og SQL. </b>
                          </i>
              <br/>
              Udover det har jeg også kompetencer inden for webudvikling.
              <br />
              <br />
              Her på 4. semester har jeg fået muligheden for at specialisere inden for&nbsp;
              <i>
                <b className="purple">Front-End Webudvikling </b> og
                {" "}
                <b className="purple">
                  UX.
                </b>
              </i>
              <br />
              <br />
                          Jeg vil udvikle med&nbsp;
                          <b className="purple">React</b> og arbejde med&nbsp;
              <i>
                <b className="purple">
                  
                  Datavisualisering
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND MIG PÅ</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Silvidy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <p>
                Eller kontakt mig på <span className="purple">b.lyngsooe@gmail.com </span>
              </p>
              
            </ul>
          </Col>
               
                </Row>
      </Container>
    </Container>
  );
}
export default Home2;
