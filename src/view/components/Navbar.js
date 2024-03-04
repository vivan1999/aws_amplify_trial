import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Form, FormControl, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap';

const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

export default function NavBar(props) {
  return (

    <Navbar style={{ backgroundColor: 'black' }} expand="lg" className='bg-body-tertiary navbar-collapse' >
      <Container fluid>
        <NavbarBrand style={{ color: 'gold', fontWeight: 'bold' }}>Vanesara</NavbarBrand>
        <NavbarCollapse style={{ color: 'gold' }}>
          <Nav justify variant='tabs' fill className="me-auto my-2 my-lg-0" style={{width:'80vw',backgroundColor:"gray"}} >
            <NavItem style={{ color: 'gold' }}>
              <NavDropdown style={{ color: 'gold', backgroundColor: "black" }} title="Fabrics" active rootCloseEvent='click'>
                <NavDropdown.Item>Organza</NavDropdown.Item>
                <NavDropdown.Item>Silk</NavDropdown.Item>
                <NavDropdown.Item>Georgette</NavDropdown.Item>
                <NavDropdown.Item>Crepe</NavDropdown.Item>
              </NavDropdown>
            </NavItem>
            <NavItem style={{ color: 'gold' }}>
              <NavDropdown style={{ color: 'gold', backgroundColor: "black" }} title="Prices" active rootCloseEvent='click'>
                <NavDropdown.Item>Below 5k Rs</NavDropdown.Item>
                <NavDropdown.Item>Above 5k Rs</NavDropdown.Item>
              </NavDropdown>
            </NavItem>
            <NavItem style={{ color: 'gold' }}>
              <NavLink style={{ color: 'gold' }} href="home">Clearance Sale</NavLink>
            </NavItem>
            <NavItem style={{ color: 'gold' }}>
              <NavLink style={{ color: 'gold' }} href="newarrivals">New Arrivals</NavLink>
            </NavItem>
            <NavItem style={{ color: 'gold' }}>
              <NavLink style={{ color: 'gold' }} href="vanesaradesigned">Handcrafted Sarees</NavLink>
            </NavItem>
            <NavItem style={{ color: 'gold' }}>
              <NavLink style={{ color: 'gold' }} href="videoshopping">Video Shopping</NavLink>
            </NavItem>

          </Nav>
          <Form>
            <FormControl placeholder='Search'/>
            
          </Form>
          <Button variant='outline-light'>Search</Button>
        </NavbarCollapse>
      </Container>
    </Navbar>

  );
}
NavBar.propTypes = { applicationName: PropTypes.string, poweredByName: PropTypes.string.isRequired };
NavBar.defaultProps = { applicationName: "Application Name", poweredByName: "Company" };



