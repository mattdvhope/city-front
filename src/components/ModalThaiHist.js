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
        textItems = ["ประวัติศาสตร์",
                     "คริสเตียนในประเทศไทยมีประวัติศาสตร์การรับใช้และการช่วยเหลือคนไทยที่ยาวนาน อย่างเช่น \"แดน บีช บรัดเลย์\" (Dan Beach Bradley) ซึ่งเป็นผู้ที่มีชื่อเสียงว่าเผ็นผู้นำและริเริ่มการฉีดวัคซีนและการผ่าตัดสมัยใหม่เข้ามาในประเทศไทย รวมถึงริเริ่มการตีพิมพ์หนังสือพิมพ์ภาษาไทยเป็นครั้งแรก",
                     "โครงการซิตี้ อิงลิช ได้ทำตามแบบอย่างของ \"แดน บีช บรัดเลย์\" (Dan Beach Bradley) โดยการช่วยเหลือคนไทยสมัยใหม่ให้ได้รับการพัฒนาศักยภาพด้านภาษาอังกฤษและความรู้ความเข้าใจในวัฒนธรรมของกลุ่มอื่นๆ",
                     "https://th.wikipedia.org/wiki/แดน_บีช_บรัดเลย์",
                     "คลิกที่นี่เพื่อเรียนรู้เพิ่มเติมเกี่ยวกับ 'แดน บีช บรัดเลย์'"];
      } else {
        textItems = ["History",
                     "Christians in Thailand have a long history of serving and helping the Thai people. For example, Dan Beach Bradley is famous for introducing modern vaccination and surgery to Thailand as well as publishing the first Thai language newspaper.",
                     "The City English Project follows in the tradition of Dan Beach Bradley by helping modern Thai people grow in their ability with English and in their knowledge of other cultures.",
                     "https://en.wikipedia.org/wiki/Dan_Beach_Bradley",
                     "Click here to learn more about Dan Beach Bradley"];
      }
    }

    return (
      <span>

        <span onClick={this.handleShow}>{this.props.getHist}</span>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center"><FontStyler><h1>{textItems[0]}</h1></FontStyler></Modal.Title>
          </Modal.Header>
          <Modal.Body>
 	          <FontStyler>
              <h3>
                {textItems[1]}
              </h3>
              <h3>
                {textItems[2]}
              </h3>
              <h3><a target="_blank" href={textItems[3]}><LinkStyler>{textItems[4]}</LinkStyler></a></h3>
                
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