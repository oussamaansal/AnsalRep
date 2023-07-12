import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/rectangles.css";
import Service from "./services";
import ServiceR from "./servicesrr";



function Section() {
  const p ="Prévoir une tablette où votre client renseigne son numéro à chaque passage  En gangnant des points de fidélité, il continu de vous donner peu à peu plus d'infos sur lui Nom, prénom, mail, age, genre, préference et autres. "
const h1 = "Programme de Fidélité"
  return (
    <section className="section">
     <Container className="container">
        <Row className="justify-content-center">
          <Col xs={2} className="text-center">
            <div className="srectangle">
             
            </div>
          </Col>
          <Col xs={2} className="text-center">
            <div className="srectangle">
          
            </div>
          </Col>
          <Col xs={2} className="text-center">
            <div className="srectangle">
          
            </div>
          </Col>
          <Col xs={2} className="text-center">
            <div className="srectangle">
             
            </div>
          </Col>
          <Col xs={2} className="text-center">
            <div className="srectangle">
             
            </div>
          </Col>
        </Row>
        <Row>
           < Service  h3='Améliorez votre expérience' h1={h1} p={p} btnTxt='Une Démo'></Service>
        </Row>
        <Row>
           < ServiceR></ServiceR>
        </Row>
        
        <Row>
           < Service h3='Améliorez votre expérience' h1='Boutique en ligne' p='Vous voulez valoriser votre marque davantage ?

Notre solution de commande en ligne à integrer directement sur votre site web pour attirer et maintenir plus de clients sur votre site à partir du premièr clic pour passer commande. ' btnTxt='Une Démo'></Service>
        </Row>
        <Row>
           < ServiceR></ServiceR>
        </Row>
        <Row>
           < Service  h3='Améliorez votre expérience' h1={h1} p={p} btnTxt='Une Démo'></Service>
        </Row>
        <Row>
           < ServiceR></ServiceR>
        </Row>
        
      </Container>
    </section>
  );
}

export default Section;
