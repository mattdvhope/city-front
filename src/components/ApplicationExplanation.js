import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';
import styled from "styled-components";

const ExplanationStyler = styled.span`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  font-size: 120%;
`

export default class Example extends Component {
	
  constructor(props) {
  	super(props)
    this.state = {detailed: false}
    this.toggle = this.toggle.bind(this)
  }
  
  toggle() {
  	console.log(this.state.detailed)
  	this.setState({detailed: !this.state.detailed})
  }

	render() {
  	return (
  		<ExplanationStyler>
				<h4>You Can Speak! is a 2-part  conversational English course specially designed to help Thais improve confidence and clarity in speaking English. Students must complete Part One of the course before signing up for Part Two. The curriculum helps Thais establish a foundation for building personal and business relationships cross-culturally. <span onClick={this.toggle} style={{color: `blue`, cursor: `pointer`}}>(...click to read more...)</span>
				</h4>
        <Collapse in={this.state.detailed}>
          <div>
					  <ul>
					    <li>"You Can Speak!" Part One and Part Two each include five 90 min classes.</li>
					    <li>Each class is taught by TESOL certifed, native English speakers.</li>
					    <li>Classes are fun, interactive and focus on helping students speak with clarity and confidence.</li>
					    <li>Classes includes a free workbook (value 300B per book).</li>
					    <li>The classes include aspects of Western culture and Christian worldview to help Thais effectively build cross-cultural relationships.</li>
					    <li>All students who successfully complete the "You Can Speak!" Part One and Part Two are awarded a certificate and a free one year membership to City English Project.</li>
					    <li>"You Can Speak!" is designed for beginner and intermediate levels</li>
					    <li>Our website is secure. We will not share your information with anyone!</li>
					  </ul>
					  <br/>
					  <h4>At Our Center</h4>
					  <ul>
					    <li>Conviently located in the Silom district</li>
					    <li>Professional environment</li>
					    <li>Multiple schedules to choose from</li>
					    <li>Small classes (6-10 people)</li>
					  </ul>
					  <br/>
					  <h4>At Your Location</h4>
					  <ul>
					    <li>We come to you!</li>
					    <li>You decide the schedule for class times.</li>
					    <li>Available in Sathorn, Bangrak, Khlong Toei, Pathum Wan, Khlong San, Pranakorn</li>
					  </ul>
          </div>
        </Collapse>
  		</ExplanationStyler>
    )
  }
}
