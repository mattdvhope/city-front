import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";
import { Modal, Popover, Tooltip, Button, OverlayTrigger } from 'react-bootstrap';

import FormApplication1 from './FormApplication1'

const TitleStyler = styled.span`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  font-size: 150%;
`

export default class ModalApplication1 extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      window: undefined
    };
  }

  componentDidMount() {
    this.setState({ window: window });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    let reg = '';
    if (this.state.window) {
      if (this.state.window.localStorage.language === "thai") {
        reg = "สมัครเรียนหลักสูตร \"You Can Speak!\" (ตอนที่ 1)";
      } else {
        reg = "Registration for \"You Can Speak!\" (Part 1)";
      }
    }

    return (
      <span>

        <span onClick={this.handleShow}>{this.props.getApplication}</span>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title><TitleStyler>{reg}</TitleStyler></Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <FormApplication1 handleClose={this.handleClose}/>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}
