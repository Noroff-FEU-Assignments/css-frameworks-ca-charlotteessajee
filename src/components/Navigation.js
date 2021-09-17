import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./home/Home";
import News from "./news/News";
import Contact from "./contact/Contact";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <>
      <Router>
        <div className={styles.fullNavbar}>
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="#" className={styles.logo}>
                The YAY Company
              </Navbar.Brand>
              <Navbar.Toggle
                className={styles.navToggle}
                aria-controls="navbarScroll"
              />
              <Navbar.Collapse id="navbarScroll" className={styles.navbarItems}>
                <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
                  <li>
                    <NavLink
                      to="/home"
                      activeClassName="activeLink"
                      className="nav-link navLink"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/news"
                      activeClassName="activeLink"
                      className="nav-link"
                    >
                      News
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      activeClassName="activeLink"
                      className="nav-link"
                    >
                      Contact
                    </NavLink>
                  </li>
                </Nav>
                <div>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="mr-2"
                      className={styles.formSearch}
                      aria-label="Search"
                    />
                    <Button
                      className={styles.navButton}
                      variant="outline-success"
                    >
                      Go
                    </Button>
                  </Form>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Navigation;
