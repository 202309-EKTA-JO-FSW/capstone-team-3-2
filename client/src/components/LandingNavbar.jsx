import React from "react";
import { Button, Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

const LandingNavbar = () => {
  return (
    <Navbar color="dark" dark expand="lg">
      <NavbarBrand href="/">
        {/* <img src="/images/logo.png" alt="DishDash Logo - Dishes Website" /> */}
        <span className="font-semibold font-poppins text-white mr-4 neon-text text-2xl leading-14 ">
          DishDash
        </span>
      </NavbarBrand>
      <Nav className="flex content-between">
        <NavItem>
          <NavLink href="/auth/login/">
            <Button outline>Sign in</Button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/auth/register/" color="dark">
            <Button outline>Sign up</Button>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default LandingNavbar;
