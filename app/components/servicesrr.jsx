import React from "react";
import "../styles/services.css";
import { Button } from "react-bootstrap";
import Link from "next/link";
import "../styles/servicesrr.css";

function ServiceR() {
  return (
    <section className="serviceR">
      <div className="rectangleR"></div>
      <div className="contentR">
        <h3>Améliorez votre expérience</h3>
        <h1>Programme de Fidélité</h1>
        <p>
          Prévoir une tablette où votre client renseigne son numéro à chaque
          passage. En gagnant des points de fidélité, il continue de vous donner
          peu à peu plus d'infos sur lui : nom, prénom, mail, âge, genre,
          préférence et autres.
        </p>
        <div className="groupR">
          <Button>Une Demo</Button>
          <Link href="#" className="linkkR">
            En Savoir Plus
            <span className="arrow-iconR">&#8594;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceR;
