import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Link from 'gatsby-link'
import ReactDOM from 'react-dom';
import styled from "styled-components";
import styles from "../css/navbar.module.css";

import ModalLogin from './ModalLogin'
import ModalApplication1 from './ModalApplication1'
import ModalApplication2 from './ModalApplication2'

const ModalStyler = styled.a`
  cursor: pointer;
`

const NavItemStyler = styled.div`
  font-size: 130%;
`

export default class NavbarOnTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      window: undefined
    }
  }

  componentDidMount() {
    this.setState({ window: window });
  }

  render() {
    if (this.state.window) {

      let navItems = [];
      if (this.state.window.localStorage.language === "thai") {
        navItems = ["สมัครเรียน",
                    "สมัครเรียนหลักสูตร 'You Can Speak!' (ตอนที่ 1)",
                    "สมัครเรียนหลักสูตร 'You Can Speak!' (ตอนที่ 2)",
                    "ชั้นเรียนในที่ทำงานของคุณ",
                    "ติดต่อเรา",
                    "อาสาสมัคร",
                    "ข้อมูลอาสาสมัคร",
                    "ลงทะเบียนอาสาสมัครใหม่",
                    "ล็อกอิน"]
      } else {
        navItems = ["Register",
                    "Register for 'You Can Speak!' (Part 1)",
                    "Register for 'You Can Speak!' (Part 2)",
                    "Class at your workplace",
                    "Contact us",
                    "Volunteer",
                    "Volunteer Info",
                    "Register New Volunteer",
                    "Login"];
      }

      return (
        <Navbar inverse collapseOnSelect fixedTop style={{backgroundImage: `linear-gradient(to bottom,#2D3179 0,#373FAE 80%)`, paddingTop: `0px`}}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/CEP+logo+small.jpg"
                  alt="CEP logo"
                  className={styles.logo}
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown eventKey={3} className="text-center" style={{ fontSize: '130%' }} title={navItems[0]} >
                <MenuItem divider />
                <li role="presentation" >
                  <ModalStyler className="text-center"><NavItemStyler><ModalApplication1 getApplication={navItems[1]} /></NavItemStyler></ModalStyler>
                </li>
                <MenuItem divider />
                <li role="presentation" >
                  <ModalStyler className="text-center"><NavItemStyler><ModalApplication2 getApplication={navItems[2]} /></NavItemStyler></ModalStyler>
                </li>
                <MenuItem divider />
                <LinkContainer to="/blog">
                  <MenuItem eventKey={3.3} className="text-center" ><NavItemStyler>{navItems[3]}</NavItemStyler></MenuItem>    
                </LinkContainer>
              </NavDropdown>

              <LinkContainer to="/contact">
                <NavItem eventKey={4} className="text-center"><NavItemStyler>{navItems[4]}</NavItemStyler></NavItem>
              </LinkContainer>

              <NavDropdown eventKey={3} className="text-center" style={{ fontSize: '130%' }} title={navItems[5]} >
                <MenuItem divider />
                <LinkContainer to="/volunteers">
                  <MenuItem eventKey={3.1} className="text-center"><NavItemStyler>{navItems[6]}</NavItemStyler></MenuItem>    
                </LinkContainer>
                <MenuItem divider />
                <li role="presentation" >
                  <ModalStyler className="text-center"><NavItemStyler><ModalApplication1 getApplication={navItems[7]} /></NavItemStyler></ModalStyler>
                </li>
                <MenuItem divider />
                <li role="presentation" >
                  <ModalStyler className="text-center"><NavItemStyler><ModalLogin getLogin={navItems[8]} /></NavItemStyler></ModalStyler>
                </li>
              </NavDropdown>

              <Navbar.Brand>
                <a>
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/thailand_flag_circle.png"
                    alt="thai flag"
                    className={styles.thaiFlag}
                    onClick={this.props.handleChangeToThai}
                  />
                </a>
              </Navbar.Brand>
              <Navbar.Brand>
                <a>
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/usa_flag_circle.png"
                    alt="usa flag"
                    className={styles.usaFlag}
                    onClick={this.props.handleChangeToEnglish}
                  />
                </a>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );

    } else {
      return <span />
    }



  }
}



