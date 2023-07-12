"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import './styles/globals.css'; 
import Hero from "./components/hero";
import Section from "./components/section";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      {" "}
      <div className="page-container">
      <header>
        <Header></Header>
      </header>
      <Hero></Hero>
      
      </div>
      <div className="page-container1">
        <Section></Section>
      </div>
      <Footer></Footer>
      

    </>
  );
}
