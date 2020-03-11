import React, { Component } from 'react';
import axios from 'axios'
import FormMdb from "../components/FormMdb.js";

export default class Register extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: /\d+/g.exec(this.props.id.location.pathname)[0],
      title: undefined,
      part: undefined,
      category: undefined
    };
  }

  componentDidMount() {
    axios.get(`${process.env.GATSBY_API_URL}/class_times/${this.state.id}.json`)
      .then((response) => {
        this.setState({
          title: response.data.period_thai,
          part: response.data.part,
          category: response.data.category
        });
      });
  }

  render() {
    const id = this.state.id;
    const title = this.state.title
    const part = this.state.part
    const category = this.state.category
    return (
      <div>
        <br/>
        <br/>
        <FormMdb trainingPeriodId={id} title={title} part={part} category={category} />
        <br/>
        <br/>
      </div>
    )
  }
}


