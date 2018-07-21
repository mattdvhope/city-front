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

const NormalPrice = styled.div`
  text-decoration: line-through;
`

const SpecialPrice = styled.div`
  color: #e67300;
  font-weight: bold;
`

const CombinedPrice = styled.div`
  color: #cc0000;
  font-weight: bold;
`

export default class ModalPrices extends Component {
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
    let textItems = [];
    if (this.state.window) {
      if (this.state.window.localStorage.language === "thai") {
        textItems = ['ข้อมูลราคา',
                     'ราคาปกติ 699 บาท',
                     'ราคาโปรโมชั่นพิเศษ 599 บาท!!',
                     'ราคา 999 บาทถ้าท่านลงทะเบียนตอนนี้สำหรับตอนที่ 1 และตอนที่ 2 ด้วยกัน!!'];
      } else {
        textItems = ['Price Information',
                     'Normal price: 699 baht',
                     'Special Promotional price: 599 baht!!',
                     'Price 999 baht if you register now for part 1 and part 2 together!!'];
      }
    }

    return (
      <span>

        <span onClick={this.handleShow}>{this.props.getPrices}</span>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center"><FontStyler><h1>{textItems[0]}</h1></FontStyler></Modal.Title>
          </Modal.Header>
          <Modal.Body>
 	          <FontStyler>
              <h4><NormalPrice>{textItems[1]}</NormalPrice></h4>
              <h4><SpecialPrice>{textItems[2]}</SpecialPrice></h4>
              <h4><CombinedPrice>{textItems[3]}</CombinedPrice></h4>
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