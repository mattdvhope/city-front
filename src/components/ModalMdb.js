import React from 'react';
import FormMdb from './FormMdb';

export default class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      window: undefined,
      mdbreact: undefined
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
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

  onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
  }

  render() {
    if (this.state.window) {

      const { Container, Modal, ModalHeader, ModalBody, ModalFooter, Button } = this.state.mdbreact;

      return (
        <Container>
          <span onClick={this.toggle}>{this.props.trainingPeriod}</span>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>{this.props.trainingPeriod}</ModalHeader>
            <ModalBody>

              <FormMdb trainingPeriodId={this.props.trainingPeriodId} toggle={this.toggle}/>

            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>ปิด</Button>{' '}
            </ModalFooter>
          </Modal>
        </Container>
      );

    } else {
      return <span />
    }

  }
}