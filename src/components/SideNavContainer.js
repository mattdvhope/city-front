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
      isOpen: false,
      window: undefined,
      document: undefined,
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.removeSideNav = this.removeSideNav.bind(this);
  }

  componentDidMount() {
    try {
      const mdbreact = require("mdbreact");
      this.setState({ mdbreact: mdbreact });
    } catch (e) {
      console.error(e);
    }

    this.setState({ document: document })
  }

  handleToggleClick() {
    const sidenav = document.getElementById("sidenavig");
    const overlay = document.getElementById("sidenav-overlay");
    sidenav ? sidenav.style.display = 'block' : null
    overlay ? overlay.style.display = 'block' : null
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  removeSideNav() {
    const sidenav = this.state.document.getElementById("sidenavig");
    const overlay = this.state.document.getElementById("sidenav-overlay");
    sidenav.style.display = 'none';
    overlay.style.display = 'none';
  }

  render() {
    const { Fa, SideNavItem, SideNavCat, SideNavNav, SideNav, SideNavLink, Container, Row } = this.props.mdbreact;
    let navItems = [];
    if (this.props.window.localStorage.language === "thai") {
      navItems = ["โปรดเลือกภาษา",
                  "รายละเอียดของการสัมมนา",
                  "คำอธิบายหลักสูตร",
                  "โลกทัศน์คริสเตียน",
                  "คำถามที่พบบ่อย ฯลฯ",
                  "คำถามที่พบบ่อย"]
    } else {
      navItems = ["Choose a language",
                  "Seminar Description",
                  "Course Description",
                  "Christian Worldview",
                  "FAQ's, etc",
                  "Frequently Asked Questions"];
    }

    return (
      <Container>

        {/* the button toggling visibility of SideNav: */}
        <Row style={{height: "5vh", alignItems: "center"}} >
            <div style={{width: "50%", textAlign: "center"}}>
              <a onClick={this.handleToggleClick}>
                <Fa style={{color: `#2D3179`}} icon="bars" size="2x"></Fa>
              </a>
            </div>
        </Row>

        <SideNav id="sidenavig" hidden triggerOpening={this.state.isOpen} className="side-nav-light" breakWidth={1300}>

          <li>
            <div className="logo-wrapper">
              <Link to="/" className="Ripple-parent">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/CEP+logo+small.jpg"
                  alt="CEP logo"
                  className="img-fluid flex-center d-block"
                  style={{marginTop: `-14.5px`, marginLeft: `auto`, marginRight: `auto`, width: `175px`, borderRadius: `50%`}}
                  onClick={this.removeSideNav}
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
            <SideNavCat id="submit-blog-cat" name={navItems[1]} icon="chevron-right" >
              <SideNavLink to="/course-description" onClick={this.removeSideNav}>{navItems[2]}</SideNavLink>
              <SideNavLink to="/christian-worldview" onClick={this.removeSideNav}>{navItems[3]}</SideNavLink>
            </SideNavCat>
            <SideNavCat id="submit-blog-cat" name={navItems[4]} icon="chevron-right" >
              <SideNavLink to="/faq" onClick={this.removeSideNav}>{navItems[5]}</SideNavLink>
              <SideNavLink to="/christian-worldview" onClick={this.removeSideNav}>{navItems[3]}</SideNavLink>
            </SideNavCat>
          </SideNavNav>
        </SideNav>
      </Container>
    );

  } // render()
} // class SideNavContainer