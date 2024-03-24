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
                src="https://plus.unsplash.com/premium_photo-1681487852901-3decdb9c698b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      src="https://i.insider.com/5d147dd2e3ecba0d28105853?width=700"
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
                      src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      src="https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                  alt="join us"
                  src="https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <CardBody>
                  <CardTitle tag="h5">Join us</CardTitle>

                  <CardText>
                    DishDash helps restaurants thrive with online ordering,
                    loyalty programs, and more
                  </CardText>
                  <Link href="/auth/register/restaurant">
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
                  src="https://plus.unsplash.com/premium_photo-1683147652618-c4c917ac2920?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="become a rider"
                />
                <CardBody>
                  <CardTitle tag="h5">Become A Rider</CardTitle>

                  <CardText>
                    Earn money by delivering food from restaurants. All you need
                    is a bike and a passion for great service
                  </CardText>
                  <Link href="/auth/register/rider">
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
