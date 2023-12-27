import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Router, Routes, Route, BrowserRouter, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import lock from "./lock.png";
import React from 'react'
import System from "./webpages/System.js"
import About from "./webpages/About.js"
import User from "./webpages/User.js"

export const NavBarBootstrap = () =>(
    <Navbar bg = "myGray" variant ="dark" sticky = "top" expand = "md" collapseOnSelect>
        <Navbar.Brand>
        <img src ={lock} width ="36px" height = "36px" />{' '}
        Dorm Alarm
        </Navbar.Brand>

        <Navbar.Toggle/>
        <Navbar.Collapse>
            <Nav>
                <Nav.Link as={Link} to = "./webpages/System.js">System Logs</Nav.Link>
                <Nav.Link as={Link} to = "./webpages/User.js">User Options</Nav.Link>
                <Nav.Link as={Link} to = "./webpages/About.js">About Us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)