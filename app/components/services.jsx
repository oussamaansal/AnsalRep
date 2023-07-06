import React from "react";
import "../styles/services.css";
import { Button } from "react-bootstrap";
import Link from "next/link";

function Service(props) {
  return (
    <section className="client-section">
      <div className="content">
        <h3>{props.h3}</h3>
        <h1>{props.h1}</h1>
        <p>
        {props.p}
        </p>
        <div className="group" >
          <Button>{props.btnTxt}</Button>
          <Link href="#" className="linkk" >En Savoir Plus  
          <span className="arrow-icon">&#8594;</span>
           
          </Link>
        </div>
      </div>
      <div className="rectangle"></div>
    </section>
  );
}

export default Service;
