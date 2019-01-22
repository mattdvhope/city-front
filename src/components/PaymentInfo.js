import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";
import { Grid, Row, Col } from 'react-bootstrap';

import ModalPrices from './ModalPrices'

const TextContainer = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
`

const ModalStyle = styled.div`
  color: #8BC34A;
  font-weight: bold;
  cursor: pointer;
`

export default class PaymentInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      window: undefined
    };
  }

  componentDidMount() {
    this.setState({ window: window });
  }

  render() {
    let textItems = [];
    if (this.state.window) {
      if (this.state.window.localStorage.language === "thai") {
        textItems = ["ข้อมูลสำหรับการโอนเงินโครงการซิตี้ อิงลิช",
                     "(กรุณานำสลิปหลักฐานการโอนเงินมาแสดงในชั้นเรียนครั้งแรกหรือชำระเงินในชั้นเรียนครั้งแรกก็ได้ค่ะ)",
                     '699 บาท (รวมค่าหนังสือ) -- ราคาโปรโมชั่นพิเศษ - 599 บาท',
                     "ธนาคาร: ธนาคารไทยพาณิชย์",
                     "บุคคลที่ติดต่อ: \"Mrs. Erin Alayne Malone\"",
                     "หมายเลขบัญชี: 227-210027-2",
                     '(หากคุณไม่เห็นอีเมล กรุณาตรวจดูในกล่องรับอีเมล "Junk" หรือ "Trash" ของคุณ หากคุณไม่ได้รับอีเมล กรุณาแจ้งให้เราทราบที่ "info@cityenglishproject.com".) '];
      } else {
        textItems = ['CEP bank transfer information',
                     '(Please bring bank transfer slip to class as proof of payment, or you can pay on the first day.)',
                     '699 baht (includes cost of book) -- Special promotion price - 599 baht',
                     'Bank: Siam Commercial Bank',
                     'Contact Person: "Mrs. Erin Alayne Malone"',
                     'Acct Number: 227-210027-2',
                     '(If you do not see an email, please look in your "Junk" or "Trash" mailbox. If you do not receive an email, please write to us at "info@cityenglishproject.com".) '];
      }

      return (
        <TextContainer>
          <hr/>
          <h2><u>{textItems[0]}</u></h2>
          <h4>{textItems[1]}</h4>
          <h4 style={{color: `#8BC34A`, fontSize: `190%`}}>{textItems[2]}</h4>
          <h4>{textItems[3]}</h4>
          <h4>{textItems[4]}</h4>
          <h4>{textItems[5]}</h4>
          <hr/>
          <h5>{textItems[6]}</h5>
          <br/>
        </TextContainer>
      )

    } else {
      return <span />
    }
  }
}
