"use client";

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import SearchBox from "./SearchBox";
import withAuth from '@/components/withAuth'

function MyNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md" color="dark">
        <NavbarBrand href="/" className="flex items-center justify-center ">
          <img
            alt="logo"
            src="/dishdashlogo.png"
            style={{
              height: 40,
              width: 40,
            }}
          />
          <p className="mx-2"> DishDash</p>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Contact Us
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Menu
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Main Courses</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Appetizer</DropdownItem>
                <DropdownItem>Desserts</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Account
              </DropdownToggle>
              <DropdownMenu right color="dark">
                <DropdownItem>
                  <NavLink
                    style={{ color: "#808080" }}
                    href={`/pages/${args.homePage}`}
                  >
                    Home Page
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  {" "}
                  <NavLink
                    style={{ color: "#808080" }}
                    href={`/pages/${args.homePage}/${args.Id}`}
                  >
                    Profile Page
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink  style={{ color: "#808080" }} onClick={args.signOut}>Log Out</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            <SearchBox />
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default withAuth(MyNavbar);
