import React from 'react';
import Link from 'gatsby-link';
import styles from "../css/sideNavPage.module.css";
import styled from "styled-components";

const ChooseStyler = styled.div`
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  color: #555;
`

export default class SideNavContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      window: undefined
    };
  }

  componentDidMount() {
    try {
      const mdbreact = require("mdbreact");
      this.setState({ mdbreact: mdbreact });
    } catch (e) {
      console.error(e);
    }
  }

  clickedItem() {
    console.log("item clicked");
  }

  render() {

    const { Fa, SideNavItem, SideNavCat, SideNavNav, SideNav, SideNavLink, Container, Row } = this.props.mdbreact;

    // Because the toggling buttons are nearly identical, we create a function to render them:
    const createButton = (onClick, side) => {
      return <div style={{width: "50%", textAlign: "center"}}>
              <a href="#!" onClick={onClick} key={'toggleThe'+side+'SideNav'}><Fa style={{color: `#2D3179`}} icon="bars" size="2x"></Fa></a>
              </div>
    }

    let navItems = [];
    if (this.props.window.localStorage.language === "thai") {
      navItems = ["โปรดเลือกภาษา"]
    } else {
      navItems = ["Choose a language"];
    }

    return (
      <Container>

        {/* the buttons toggling visibility of SideNavs: */}
        <Row style={{height: "4vh", alignItems: "center"}} >
            {createButton(this.props.handleToggleClick, "Side")}
        </Row>

        {/* the left SideNav: */}
        <SideNav hidden triggerOpening={this.props.isOpen} className="side-nav-light" breakWidth={1300}>

          <li>
            <div className="logo-wrapper">
              <Link to="/" className="Ripple-parent">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/CEP+logo+small.jpg"
                  alt="CEP logo"
                  className="img-fluid flex-center d-block"
                  style={{marginTop: `-14.5px`, marginLeft: `auto`, marginRight: `auto`, width: `175px`, borderRadius: `50%`}}
                />
                <div className="Ripple " style={{top: "0px", left: "0px", width: "0px", height: "0px"}}></div>
              </Link>
            </div>
          </li>

          <li>
            <ChooseStyler className="text-center">{navItems[0]}</ChooseStyler>
            <ul className="social">
              <li>
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/thailand_flag_circle.png"
                  alt="thai flag"
                  className={styles.thaiFlag}
                  onClick={this.props.handleChangeToThai}
                />
              </li>
              <li>
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/usa_flag_circle.png"
                  alt="usa flag"
                  className={styles.usaFlag}
                  onClick={this.props.handleChangeToEnglish}
                />
              </li>
            </ul>
          </li>
          <SideNavNav>
            <SideNavCat id="submit-blog-cat" name="Information" icon="chevron-right" >
              <SideNavLink to="christian-worldview">Christian Worldview</SideNavLink>
            </SideNavCat>

        {/* 

            <SideNavCat id="instruction-cat" name="Instruction" icon="hand-pointer-o">
              <SideNavLink>For bloggers</SideNavLink>
              <SideNavLink>For authors</SideNavLink>
            </SideNavCat>
            <SideNavCat id="about-cat" name="About" icon="eye">
              <SideNavLink to="christian-worldview">Christian Worldview</SideNavLink>
              <SideNavLink>FAQ</SideNavLink>
            </SideNavCat>
            <SideNavCat id="contact-me-cat" name="Contact me" icon="envelope-o">
              <SideNavLink>Write a message</SideNavLink>
            </SideNavCat>
         */}

          </SideNavNav>
        </SideNav>
      </Container>
    );
  }
}