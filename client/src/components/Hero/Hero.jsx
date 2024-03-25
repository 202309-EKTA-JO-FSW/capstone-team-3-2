import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const HeroSection = ({header,subHeader,imgUrl,paragraph}) => {
  return (
    
    <div
      className={`flex text-white items-center  justify-center mb-6`}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "300px",       
      }}
    >
      <Container >
        <Row  className=" justify-center ">
          <Col >
            <h2 className="display-6 " >
               {header} <span style={{ color: "#5c724a" }}>{subHeader}</span> 
            </h2>
            <p className="lead "> {paragraph}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
