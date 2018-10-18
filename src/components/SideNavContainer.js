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

  render() {

    const { Fa, SideNavItem, SideNavCat, SideNavNav, SideNav, SideNavLink, Container, Row } = this.props.mdbreact;

    // Because the toggling buttons are nearly identical, we create a function to render them:
    const createButton = (onClick, side) => {
      return <div style={{width: "50%", textAlign: "center"}}>
              <a onClick={onClick} key={'toggleThe'+side+'SideNav'}><Fa style={{color: `#2D3179`}} icon="bars" size="2x"></Fa></a>
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
        <Row style={{height: "5vh", alignItems: "center"}} >
            {createButton(this.props.handleToggleClick, "Side")}
        </Row>

        {/* the left SideNav: */}

        {console.log("SideNavContainer isOpen:", this.props.isOpen)}

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
              <a className="Ripple-parent" href="/christian-worldview">Christian Worldview<div className="Ripple " style={{top: `0px`, left: `0px`, width: `0px`, height: `0px`}}></div></a>
              <a className="Ripple-parent" href="/business">Business<div className="Ripple " style={{top: `0px`, left: `0px`, width: `0px`, height: `0px`}}></div></a>

        {/* 
              <SideNavLink to="christian-worldview" onClick={this.props.handleToggleClick}>Christian Worldview</SideNavLink>
              <SideNavLink to="business" onClick={this.props.handleToggleClick}>Business</SideNavLink>
         */}

            </SideNavCat>
          </SideNavNav>
        </SideNav>
      </Container>
    );
  }
}