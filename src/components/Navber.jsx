import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaCloudDownloadAlt } from "react-icons/fa";
import logo from "../assets/logo.png";
const Navber = () => {
  return (
    <section className="py-[15px] nav-section">
      <Container>
        <Navbar expand="lg" className="">
          <Navbar.Brand className="logo" href="#home">
            <img src={logo}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-[50px]">
              <Nav.Link href="#home" className="!text-[16px] listitem">
                Home
              </Nav.Link>
              <Nav.Link href="#home" className="!text-[16px] listitem">
                About
              </Nav.Link>
              <Nav.Link href="#home" className="!text-[16px] listitem">
                Service
              </Nav.Link>
              <Nav.Link href="#link" className="!text-[16px] listitem">
                Contact
              </Nav.Link>

               
            </Nav>
            <div>
              <button className="nav-btn bg-[#EA580C] text-[white] flex gap-[27px] items-center py-[18px] pr-[59px] pl-[51px] text-[20px] rounded-[20px]">
                <FaCloudDownloadAlt />
                Download
              </button>
            </div>
           
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  );
};

export default Navber;
