import { Container, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {SwitchTransition, CSSTransition, TransitionGroup } from "react-transition-group";
import "../styles/hero.css";
import React, { useState, useEffect } from "react";
import "../styles/changeText.css";
import "../styles/form.css";

function ChangingText({ texts }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <div className="changing-text">
      <TransitionGroup component={null}>
        <CSSTransition
          key={currentTextIndex}
          appear={true}
          timeout={0}
          classNames="fade"
        >
          <span>{texts[currentTextIndex]}</span>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

function Hero() {
  const texts = [
    "créer votre site internet ",
    "développez votre présence en ligne ",
    "lancez votre site internet personnalisé ",
    "obtenez un site internet professionnel ",
  ];

  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowForm(true);
    setSubmitted(true);
  };

  return (
    <>
      <section className="hero-section">
        <Container>
          <Row className="r1">
            <Col md={6} className="col-padding-bot">
              <h1>
                Votre expert Marketing pour <ChangingText texts={texts} />
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              {!submitted ? (
                <Form onSubmit={handleFormSubmit}>
                  <div className="input-group">
                    <div className="input-wrapper">
                      <Form.Control type="text" placeholder="Your Name" />
                    </div>
                    <div className="button-col">
                      <Button
                        variant="primary"
                        type="submit"
                        className="right-button"
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </Form>
              ) : (
                <SwitchTransition mode="out-in">
                <CSSTransition
                  in={true}
                  appear={true}
                  timeout={0}
                  classNames="fade"
                  
                >
                  <Form>
                    <div className="input-group">
                      <div className="input-wrapper">
                        {/* Additional form elements */}
                        <Form.Control type="email" placeholder="Your Email" />
                      </div>
                      <div className="button-col">
                        <Button variant="primary" className="right-button">
                          Submit
                        </Button>
                      </div>
                    </div>
                  </Form>
                </CSSTransition>
                </SwitchTransition>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Hero;
