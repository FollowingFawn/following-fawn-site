import React from "react"
import { Navbar, Nav, NavItem} from 'react-bootstrap';

export class Header extends React.Component {
    render() {
        return (
            <Navbar fixedTop collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="#brand">Fawn Stevens</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                <NavItem eventKey={1} href="#">
                    Resume
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Contact
                </NavItem>
                </Nav>
                <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    LinkedIn
                </NavItem>
                <NavItem eventKey={2} href="#">
                    GitHub
                </NavItem>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
