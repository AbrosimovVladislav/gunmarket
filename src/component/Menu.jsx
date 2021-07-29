import React from "react";
import {Breadcrumb, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

function Menu(props) {

    const menuItems = [{name:"Главная",href:"/"},{name:"Каталог",href:"/catalog"}];

    return (
        <div>
        <Navbar bg="blue" expand="sm">
            <Container>
                <Navbar.Brand href="/">YOUR GUN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                            {
                                menuItems && menuItems.map((menuItem, index) =>
                                    <Nav.Link href={menuItem.href}>{menuItem.name}</Nav.Link>
                                )
                            }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            <Breadcrumb>
                {
                    menuItems && menuItems.map((menuItem, index) =>
                        <Breadcrumb.Item href={menuItem.href}>{menuItem.name}</Breadcrumb.Item>
                    )
                }
            </Breadcrumb>
        </div>
    )
}

export default Menu;