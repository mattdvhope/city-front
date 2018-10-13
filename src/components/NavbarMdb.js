import React, { Component } from 'react';
import Link from 'gatsby-link'
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
import styles from "../css/navbarMdb.module.css";

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import ModalLogin from './ModalLogin'
import ModalApplication1 from './ModalApplication1'
import ModalMdb from './ModalMdb'
import ModalApplication2 from './ModalApplication2'
import ModalVolAppl from './ModalVolAppl'

const TitleStyler = styled.span`
  position: fixed;
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  color: #2D3179;
  font-size: 160%;
  margin-top: -19px;
`

const TogglerColor = styled.span`
  background-color: #2D3179;
`

export default class NavbarMdb extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          collapse: false,
          isWideEnough: false,
          window: undefined,
          mdbreact: undefined
      };
      this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
      this.setState({ window: window });

      try {
        const mdbreact = require("mdbreact");
        this.setState({ mdbreact: mdbreact });
      } catch (e) {
        console.error(e);
      }
    }

    onClick(){
      this.setState({
          collapse: !this.state.collapse,
      });
    }

    render() {

      if (this.state.window) {

        const { Container, Navbar, NavbarNav, NavbarToggler, Collapse, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavLink } = this.state.mdbreact;

        let navItems = [];
        if (this.state.window.localStorage.language === "thai") {
          navItems = ["โครงการซิตี้ อิงลิช",
                      "สมัครเรียน",
                      "สมัครเรียนหลักสูตร 'You Can Speak!' (ตอนที่ 1)",
                      "สมัครเรียนหลักสูตร 'You Can Speak!' (ตอนที่ 2)",
                      "ชั้นเรียนในที่ทำงานของคุณ",
                      "ติดต่อเรา",
                      "อาสาสมัคร",
                      "ข้อมูลอาสาสมัคร",
                      "ลงทะเบียนอาสาสมัครใหม่",
                      "ล็อกอิน"]
        } else {
          navItems = ["City English Project",
                      "Register",
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
          <Container>
            <Navbar expand="md" dark fixed="top" style={{ backgroundColor: `#EFEFEF` }}>
              <NavbarNav left>

                  <NavItem>
                    <NavLink className="nav-link text-center" to="/"><TitleStyler>{navItems[0]}</TitleStyler></NavLink>
                  </NavItem>

              </NavbarNav>

              { !this.state.isWideEnough && <TogglerColor><NavbarToggler onClick = { this.onClick }/></TogglerColor>}
              <Collapse isOpen = { this.state.collapse } navbar>
                <NavbarNav right>

                  <br/>

                  <NavbarNav className="text-center">
                    <img
                      src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/thailand_flag_circle.png"
                      alt="thai flag"
                      className={styles.thaiFlag}
                      onClick={this.props.handleChangeToThai}
                    />
                  </NavbarNav>

                  <br/>

                  <NavbarNav className="text-center">
                    <img
                      src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/usa_flag_circle.png"
                      alt="usa flag"
                      className={styles.usaFlag}
                      onClick={this.props.handleChangeToEnglish}
                    />
                  </NavbarNav>

                </NavbarNav>
              </Collapse>

            </Navbar>
          </Container>
        );

      } else {
        return <span />
      }

    }
}