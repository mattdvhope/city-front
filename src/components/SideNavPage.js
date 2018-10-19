import React from 'react';
import Link from 'gatsby-link';
import styles from "../css/sideNavPage.module.css";
import SideNavContainer from './SideNavContainer';

export default class SideNavPage extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      window: undefined,
      mdbreact: undefined
    };
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

  render() {
    if (this.state.window) {

      return (
        <SideNavContainer
          window={this.state.window}
          mdbreact={this.state.mdbreact}
          handleChangeToThai={this.props.handleChangeToThai}
          handleChangeToEnglish={this.props.handleChangeToEnglish}
        />
      );

    } else { // if ...this.state.window
      return <span />;
    }
  }
}