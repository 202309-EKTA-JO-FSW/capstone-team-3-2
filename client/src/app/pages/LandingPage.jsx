"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardTitle,
  CardBody,
  CardText,
} from "reactstrap";
import Hero from "@/components/Hero/Hero";
import SearchBox from "@/components/SearchBox";
import LandingNavbar from "@/components/LandingNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const LandingPage = () => {
  const [showSteps, setShowSteps] = useState(false);
  const router = useRouter();

  const handleSearch = (searchQuery) => {
    // e.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/search?q=${searchQuery}`);
      setSearchQuery("");
    }
  };

  const toggleSteps = () => {
    setShowSteps(!showSteps);
  };

  return (
    <div className="flex flex-col">
      <LandingNavbar />
      <Hero
        imgUrl={"landingpage.png"}
        header={"Welcome to"}
        subHeader={"DishDash"}
        paragraph={"Discover Our Most Delectable Dishes 🍔"}
      />

      <Container>
        <Container className="my-2">
          <Row className="justify-center items-center ">
            <Col md={6}>
              <SearchBox handleSearch={handleSearch} />
            </Col>
            <Col md={2}>
              <img
                src="https://assets.api.uizard.io/api/cdn/stream/509960c0-9679-42c2-9fe2-0e3a3ed5e54f.png"
                alt="discover1"
              />
            </Col>
          </Row>
        </Container>

        <Container className="mb-4">
          <Row sm={4} className="justify-center items-center mb-4 ">
            <Button color="dark" onClick={toggleSteps}>
              How It Works
            </Button>
          </Row>

          {showSteps && (
            <Container>
              <Row className="justify-around">
                <Col md={4}>
                  <Card className="shadow-lg text-center" style={{minHeight:'100%'}}>
                    <img
                      src="https://assets.api.uizard.io/api/cdn/stream/7dc79fea-dfab-43c4-8c3c-4d3c302573fb.png"
                      alt="step1"
                    />
                    <CardBody>
                      <CardTitle tag="h5">Step 1</CardTitle>

                      <CardText>
                        Enter your location, Simply type in your address or
                        enable location services for a precise delivery
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>

                <Col md={4}>
                  <Card className="shadow-lg text-center " style={{minHeight:'100%'}}>
                    <img
                      src="https://assets.api.uizard.io/api/cdn/stream/a46630bd-9a0c-4b7c-bb3c-6b0f4f2d3b31.png"
                      alt="step 2"
                    />
                    <CardBody>
                      <CardTitle tag="h5">Step 2</CardTitle>

                      <CardText>
                        Choose a restaurant and a mouthwatering dish. The
                        perfect quick bite is just a click away
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>

                <Col md={4}>
                  <Card className="shadow-lg text-center" style={{minHeight:'100%'}}>
                    <img
                      src="https://assets.api.uizard.io/api/cdn/stream/6992293c-39ad-4d51-873e-64bf26754ab0.png"
                      alt="step 3"
                    />
                    <CardBody>
                      <CardTitle tag="h5">Step 3</CardTitle>

                      <CardText>
                        Complete your payment. Sit back and relax while we
                        prepare your delicious food
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          )}
        </Container>
        <hr />
        <Container className="my-4">
          <Row className="text-center my-4 ">
            <h2 className="font-bold"> Join the DishDash community</h2>
          </Row>
          <Row className="text-center justify-center">
            <Col md={4}>
              <Card
                className="shadow-md rounded-lg"
                style={{ minHeight: "100%" }}
              >
                <img
                  alt="become a rider"
                  src="https://assets.api.uizard.io/api/cdn/stream/3de66382-a1d7-41e9-add0-73355e305e95.png"
                />
                <CardBody>
                  <CardTitle tag="h5">Join us</CardTitle>

                  <CardText>
                    DishDash helps restaurants thrive with online ordering,
                    loyalty programs, and more
                  </CardText>
                  <Link href="/pages/restaurant/signup">
                    <Button color="dark">Join Now</Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>

            <Col md={4}>
              <Card
                className="shadow-md rounded-lg "
                style={{ minHeight: "100%" }}
              >
                <img
                  src="https://assets.api.uizard.io/api/cdn/stream/e246370c-8563-4926-bbe9-d1d44b872ab7.png"
                  alt="become a rider"
                />
                <CardBody>
                  <CardTitle tag="h5">Become A Rider</CardTitle>

                  <CardText>
                    Earn money by delivering food from restaurants. All you need
                    is a bike and a passion for great service
                  </CardText>
                  <Link href="/pages/rider/signup">
                    <Button color="dark">Start Riding</Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default LandingPage;
