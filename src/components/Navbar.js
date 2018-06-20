import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Link from 'gatsby-link'
import styled from "styled-components";
import styles from "../css/navbar.module.css";

import ModalLogin from './ModalLogin'
import ModalApplication from './ModalApplication'

const ModalStyler = styled.a`
  cursor: pointer;
`

export default class NavbarOnTop extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.state = { collapsed: true, };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  onItemClick(event) {
    this.setState({ selectedItem: event.currentTarget.dataset.id });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'navbar-toggle collapsed' : 'navbar-toggle show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    // Thai/English switching!!!!!
    let other;

    if (this.props.currentLanguage) {
      const { english } = this.props.currentLanguage;
      other = english ? "Other" : "ดดดดด"
    } else {
      other = "Other";
    }

    return (
      <Navbar inverse collapseOnSelect fixedTop style={{backgroundImage: `linear-gradient(to bottom,#2D3179 0,#2D3179 100%)`}}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/CEP+logo+small.jpg"
                alt="logo"
                className={styles.logo}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/products">
              <NavItem eventKey={2} className="text-center">{other}</NavItem>
            </LinkContainer>
            <LinkContainer to="/Tags">
              <NavItem eventKey={4} className="text-center">Tags</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={3} className="text-center" title="Items to Choose" id="basic-nav-dropdown" >
              <MenuItem divider />
              <LinkContainer to="/about">
                <MenuItem eventKey={3.1} className="text-center">About</MenuItem>    
              </LinkContainer>
              <MenuItem divider />
              <li role="presentation" >
                <ModalStyler className="text-center"><ModalLogin getLogin="Log in" /></ModalStyler>
              </li>
              <MenuItem divider />
              <LinkContainer to="/products">
                <MenuItem eventKey={3.3} className="text-center" >Products</MenuItem>    
              </LinkContainer>      
              <MenuItem divider />
              <LinkContainer to="/blog-index">
                <MenuItem eventKey={3.4} className="text-center" >Blog List</MenuItem>    
              </LinkContainer>
              <MenuItem divider />
            </NavDropdown>
            <LinkContainer to="/about" className={styles.thaiFlagDLi}>
              <NavItem eventKey={2} >
                <div className={styles.thaiImageContainer} onClick={this.props.handleChangeToThai} style={{backgroundImage: `url('https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/thailand_flag_circle.png')`, backgroundSize: `48px`, backgroundRepeat: `no-repeat`}} />
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/products" className={styles.usaFlagLi}>
              <NavItem eventKey={2} >
                <div className={styles.usaImageContainer} onClick={this.props.handleChangeToEnglish} style={{backgroundImage: `url('https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/usa_flag_circle.png')`, backgroundSize: `48px`, backgroundRepeat: `no-repeat`}} />
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}



