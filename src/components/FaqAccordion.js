import React, { Component } from 'react';
import styled from "styled-components";

const FontContainer = styled.span`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
`

export default class FaqAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      window: undefined,
      mdbreact: undefined,
      collapseID: undefined
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

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));

  render() {
    if (this.state.window) {
      const { data } = this.props;
      let textItems;
      let interval = 1;

      const { Container, Collapse, Card, CardBody, CollapseHeader, Row, Fa } = this.state.mdbreact;

      const language = this.state.window.localStorage.language;
      if (language === "thai") {
        textItems = ['คำถามที่พบบ่อย'];
      } else {
        textItems = ['FAQ\'s'];
      }

      const {collapseID} = this.state;

      const CardBasedOnLanguage = ({question, answer}) => {
        return (
          <Card>
            <span style={{display: `none`}}>{interval++}</span>
            <CollapseHeader onClick={this.toggleCollapse(`collapse${interval}`)}><FontContainer>{question}</FontContainer>
              <i className={collapseID === `collapse${interval}` ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i>
            </CollapseHeader>
            <Collapse id={`collapse${interval}`} isOpen={collapseID}>
              <CardBody>
                {answer}
              </CardBody>
            </Collapse>
          </Card>
        )
      }

      const CardHolder = ({node}) => {
        if (language === "thai") {
          return (
            <CardBasedOnLanguage question={node.faqQuestionThai} answer={node.faqAnswerThai.faqAnswerThai} />
          )
        } else {
          return (
            <CardBasedOnLanguage question={node.faqQuestion} answer={node.faqAnswer.faqAnswer} />
          )
        }
      }

      return (
        <Container className="md-accordion mt-5">
    
          {this.props.edges.map((edge) => <CardHolder key={edge.node.faqQuestion} node={edge.node} />)}

        </Container>
      );

    } else {
      return <span />
    }

  }
}
