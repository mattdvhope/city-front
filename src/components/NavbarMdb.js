import React, { Component } from 'react';
import Link from 'gatsby-link'
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import SideNavPage from './SideNavPage';

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
  margin-top: -17px;

  @media (min-width: 1700px) {
    margin-left: -1000px;
  }
  @media (max-width: 1700px) {
    margin-left: -900px;
  }
  @media (max-width: 1600px) {
    margin-left: -850px;
  }
  @media (max-width: 1500px) {
    margin-left: -800px;
  }
  @media (max-width: 1400px) {
    margin-left: -750px;
  }
  @media (max-width: 1300px) {
    margin-left: -700px;
  }
  @media (max-width: 1200px) {
    margin-left: -650px;
  }
  @media (max-width: 1100px) {
    margin-left: -600px;
  }
  @media (max-width: 1000px) {
    margin-left: -550px;
  }
  @media (max-width: 900px) {
    margin-left: -500px;
  }
  @media (max-width: 800px) {
    margin-left: -450px;
  }
  @media (max-width: 750px) {
    margin-left: -425px;
  }
  @media (max-width: 700px) {
    margin-left: -400px;
  }
  @media (max-width: 650px) {
    margin-left: -375px;
  }
  @media (max-width: 600px) {
    margin-left: -350px;
  }
  @media (max-width: 550px) {
    margin-left: -325px;
  }
  @media (max-width: 500px) {
    margin-left: -300px;
  }
  @media (max-width: 450px) {
    margin-left: -275px;
  }
  @media (max-width: 400px) {
    margin-left: -250px;
  }
  @media (max-width: 350px) {
    margin-left: -225px;
  }
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
                <SideNavPage handleChangeToThai={this.props.handleChangeToThai} handleChangeToEnglish={this.props.handleChangeToEnglish} />
              </NavbarNav>

              <NavbarNav right>
                <NavItem>
                  <NavLink className="nav-link" to="/"><TitleStyler>{navItems[0]}</TitleStyler></NavLink>
                </NavItem>
              </NavbarNav>

            </Navbar>
          </Container>
        );

      } else {
        return <span />
      }

    }
}