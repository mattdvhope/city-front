import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from "styled-components";

const LinkStyler = styled.a`
  color: #8BC34A;
  font-weight: bolder;
`
const FontStyler = styled.span`
  font-family: Neue Frutiger W31 Modern Light, Athiti
`


export default class ModalThaiHist extends Component {
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

        <span onClick={this.handleShow}>{this.props.getHist}</span>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center"><FontStyler><h1>History...</h1></FontStyler></Modal.Title>
          </Modal.Header>
          <Modal.Body>
 	          <FontStyler>
              <h3>
                Christians in Thailand have a long history of serving and helping the Thai people. For example, Dan Beach Bradley is famous for introducing modern vaccination and surgery to Thailand as well as publishing the first Thai language newspaper.  The City English Project follows in the tradition of Dan Beach Bradley by helping modern Thai people grow in their ability with English and in their knowledge of other cultures.
              </h3>
              <h3><a target="_blank" href="https://en.wikipedia.org/wiki/Dan_Beach_Bradley"><LinkStyler>Click here to learn more about Dan Beach Bradley</LinkStyler></a></h3>
                
            </FontStyler>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}