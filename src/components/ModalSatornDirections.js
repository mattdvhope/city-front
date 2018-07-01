import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from "styled-components";

import SatornDirections from './SatornDirections'

const TitleContainer = styled.div`
  color: #2d3179;
  font-size: 200%;
`;

export default class ModalSatornDirections extends Component {
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

        <span onClick={this.handleShow}>{this.props.getSatorn}</span>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center"><TitleContainer>มาจากสาทรเหนือ</TitleContainer></Modal.Title>
          </Modal.Header>
          <Modal.Body>

 	          <SatornDirections
              fromSatorn1={this.props.fromSatorn1}
              fromSatorn2={this.props.fromSatorn2}
              fromSatorn3={this.props.fromSatorn3}
              fromSatorn4={this.props.fromSatorn4}
              fromSatorn5={this.props.fromSatorn5}
              fromSatorn6={this.props.fromSatorn6}
              fromSatorn7={this.props.fromSatorn7}
              fromSatorn8={this.props.fromSatorn8}
              fromSatorn9={this.props.fromSatorn9}
              fromSatorn10={this.props.fromSatorn10}
            />
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}