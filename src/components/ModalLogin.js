import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";
import { Modal, Button } from 'react-bootstrap';

import Login from './Login'

export default class ModalLogin extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <span>

        <span onClick={this.handleShow}>{this.props.getLogin}</span>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center"><h1>Log In</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body>

 	          <Login handleClose={this.handleClose}/>
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}