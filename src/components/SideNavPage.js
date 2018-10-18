import React from 'react';
import Link from 'gatsby-link';
import styles from "../css/sideNavPage.module.css";
import SideNavContainer from './SideNavContainer';

export default class SideNavPage extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isOpen: false,
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

  handleToggleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
console.log("isOpen:", this.state.isOpen);
  }

  render() {
    if (this.state.window) {

      return (
        <SideNavContainer
          window={this.state.window}
          mdbreact={this.state.mdbreact}
          handleChangeToThai={this.props.handleChangeToThai}
          handleChangeToEnglish={this.props.handleChangeToEnglish}
          handleToggleClick={this.handleToggleClick}
          isOpen={this.state.isOpen}
        />
      );

    } else { // if ...this.state.window
      return <span />;
    }
  }
}