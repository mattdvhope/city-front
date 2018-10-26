import React from 'react';
import styled from "styled-components";

import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


const CenterAddress = styled.div`
  color: #8BC34A;
  font-weight: bold;
  cursor: pointer;
`

const AddressTitle = styled.div`
  font-size: 155%;
`

export default class ModalDirections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.renderAddress = this.renderAddress.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  renderAddress(title, note, number, district, city) {
    return (
      <CenterAddress onClick={this.toggle}>
        <AddressTitle>{title}</AddressTitle>
        <div>{note}</div>
        <div>{number}</div>
        <div>{district}</div>
        <div>{city}</div>
      </CenterAddress>
    );
  }

  render() {
    return (
      <Container>

        {this.renderAddress(
          "Address",
          "(click to see directions)",
          "66 Pan Road",
          "Silom, Bangrak",
          "Bangkok 10500"
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <div>

              1
              <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Directions+from+Satorn/From+Satorn+2.jpg" className="img-fluid" alt="CEP directions" />
              <hr />

              2
              <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Directions+from+Satorn/From+Satorn+1.jpg" className="img-fluid" alt="CEP directions" />
              <hr />

              3
              <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Directions+from+Satorn/From+Satorn+3.jpg" className="img-fluid" alt="CEP directions" />
              <hr />

              4
              <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Directions+from+Satorn/From+Satorn+4.jpg" className="img-fluid" alt="CEP directions" />
              <hr />

              5
              <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Directions+from+Satorn/From+Satorn+5.jpg" className="img-fluid" alt="CEP directions" />
              <hr />

              6
              <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Directions+from+Satorn/From+Satorn+6.jpg" className="img-fluid" alt="CEP directions" />
              <hr />

              7
              <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Directions+from+Satorn/From+Satorn+7.jpg" className="img-fluid" alt="CEP directions" />
              <hr />

              8
              <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Directions+from+Satorn/From+Satorn+8.jpg" className="img-fluid" alt="CEP directions" />
              <hr />

              9
              <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Pictues+-+CEP1.png" className="img-fluid" alt="CEP's front entrance" />
              <hr />

              10
              <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Front+entrance+driveway+to+CEP.png" className="img-fluid" alt="CEP's front entrance" />
              <hr />

              11
              <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Directions+from+Satorn/From+Satorn+10.jpg" className="img-fluid" alt="CEP directions" />
              <hr />

              12
              <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Pictues+-+CEP2.png" className="img-fluid" alt="CEP's front entrance" />
              <hr />

              13
              <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Pictues+-+CEP3.png" className="img-fluid" alt="CEP's front entrance" />

            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="light-green" onClick={this.toggle}>Close</Button>{' '}
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
