import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Badge, Button, Card, Collapse, Container, Dropdown, Nav, NavDropdown, Navbar, OverlayTrigger, Table, Tooltip } from 'react-bootstrap';
import BrandLogo from './BrandLogo';

export default function Navbars({ ...props }) {
  return (
 
          <Container   fluid data-bs-theme="vibrant" expand="lg" className='w-100 p-0 mb-5 position-fixed z-index-5'>
           
            <Navbar bg='black'  expand="xl" style={{ border: 0 }}>
              <Container className='custom-width' fluid>

                <Navbar.Brand href="#!" className="d-flex align-items-center">
                <BrandLogo />

                 <div className="d-flex flex-column ms-1 gap-2 justify-content-end">
                 <h1 data-bs-theme="light" className='fs-2 mb-0 mainHeading'>Tap to Sign</h1>
                  <h3 className='fs-3 mb-0 text-secondary'>Accounts</h3>
                 </div>
                  </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                  <Nav className="ms-auto">
                    <Nav.Item active>
                      <Nav.Link  className='nav-link-top-bar' href="#ManageDBMS">Manage DBMS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link  className='nav-link-top-bar' href="#Watchlist">Watchlist</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className='nav-link-top-bar' href="#Onboarding">Onboarding</Nav.Link>
                    </Nav.Item>
                    <NavDropdown className='nav-link-top-bar' title="More Options" id="nav-dropdown">
                      <NavDropdown.Item href="#a">Audit extension and exe version</NavDropdown.Item>
                      <NavDropdown.Item href="#b">Install Settings</NavDropdown.Item>
                      <NavDropdown.Item href="#b">Inventory Details</NavDropdown.Item>
                      <NavDropdown.Item href="#b">Authenticate Logs</NavDropdown.Item>
                      <NavDropdown.Item href="#b">New Dashboard</NavDropdown.Item>
                      <NavDropdown.Item href="#b">30</NavDropdown.Item>
                      <NavDropdown.Item href="#b">100</NavDropdown.Item>
                      <NavDropdown.Item href="#b">Test Reports</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#c">Log out</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                    <Button variant="warning">Sign Up</Button>
                    </Nav.Item>
                  </Nav>
                </Navbar.Collapse>

              </Container>
            </Navbar>
            
          </Container>
      

  );
}
