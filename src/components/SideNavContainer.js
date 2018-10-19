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
      window: undefined
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  componentDidMount() {
    try {
      const mdbreact = require("mdbreact");
      this.setState({ mdbreact: mdbreact });
    } catch (e) {
      console.error(e);
    }
  }

  handleToggleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
console.log("in handleToggleClick, isOpen:", this.state.isOpen);
  }


  render() {

    const { Fa, SideNavItem, SideNavCat, SideNavNav, SideNav, SideNavLink, Container, Row } = this.props.mdbreact;

    let navItems = [];
    if (this.props.window.localStorage.language === "thai") {
      navItems = ["โปรดเลือกภาษา"]
    } else {
      navItems = ["Choose a language"];
    }

    let sidenav = document.getElementById("sidenavig")
    let overlay = document.getElementById("sidenav-overlay")

    console.log(sidenav);
    console.log(overlay);


    // if (this.state.isOpen) {
    
      return (
        <Container>

          {/* the button toggling visibility of SideNav: */}
          <Row style={{height: "5vh", alignItems: "center"}} >
              <div style={{width: "50%", textAlign: "center"}}>
                <a onClick={this.handleToggleClick}>
                  <Fa style={{color: `#2D3179`}} icon="bars" size="2x"></Fa>
                </a>
              </div>
              {console.log("visible Container, isOpen", this.state.isOpen)}
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

    // } else {
  
    //   return (
    //     <Container>
    //       {/* the buttons toggling visibility of SideNavs: */}
    //       <Row style={{height: "5vh", alignItems: "center"}} >
    //           <div style={{width: "50%", textAlign: "center"}}>
    //             <a onClick={this.handleToggleClick}>
    //               <Fa style={{color: `#2D3179`}} icon="bars" size="2x"></Fa>
    //             </a>
    //           </div>
    //           {console.log("hidden Container, isOpen:", this.state.isOpen)}
    //       </Row>
    //     </Container>
    //   )

    // }


  } // render()
} // class SideNavContainer