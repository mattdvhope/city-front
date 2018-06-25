import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Link from 'gatsby-link'
import axios from 'axios'
import { navigateTo } from "gatsby-link"
import View from "./View"

import { getCurrentUser } from "../utils/auth"
import styled from "styled-components";

const CTStyler = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  font-size: 90%;
`
const HeadEl = styled.div`
  font-size: 150%;
`

const TCell = styled.div`
  font-size: 120%;
`

export default class ViewClassTimes extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      class_times: [],
    };
  }

  componentDidMount() {
    axios.get(`${process.env.GATSBY_API_URL}/class_times.json`)
      .then((response) => {
        const class_times = this.filterSortClassTimes(response.data);
        this.setState({ class_times });
      });
  }

  filterSortClassTimes(class_times) {
    var class_times_part_1 = [];
    class_times.forEach(function(class_time) {
      class_time.part === "one" ? class_times_part_1.push(class_time) : null;
    });

    var off_site = class_times.filter( function(item){return (item.part=="off-site");} );
    class_times_part_1.unshift(off_site[0]);

    return class_times_part_1.sort(function(a, b) {
      return a.order_no - b.order_no;
    });
  }

  render() {
    return (
      <CTStyler className="container">
        <h2><Link to="/app/dashboard">Back to Dashboard</Link></h2>
        <hr/>
        <h1>View Class Times</h1>

        {this.state.class_times.map((time, timeKey) => {
          return (
            <div key={timeKey}>
              <h3 key={time.period} value={time.period}>{time.period}</h3>
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th><HeadEl>Nickname</HeadEl></th>
                    <th><HeadEl>First Name</HeadEl></th>
                    <th><HeadEl>Last Name</HeadEl></th>
                    <th><HeadEl>Gender</HeadEl></th>
                    <th><HeadEl>Phone Number</HeadEl></th>
                    <th><HeadEl>Email</HeadEl></th>
                    <th><HeadEl>Date Registered</HeadEl></th>
                  </tr>
                </thead>
                <tbody key={time.period}>
                  {time.users.map((student, stuKey) => {
                    return (
                      <tr key={stuKey}>
                        <td key={student.nickname+"nick"}><TCell>{student.nickname}</TCell></td>
                        <td key={student.first_name+"first"}><TCell>{student.first_name}</TCell></td>
                        <td key={student.last_name+"last"}><TCell>{student.last_name}</TCell></td>
                        <td key={student.gender}><TCell>{student.gender}</TCell></td>
                        <td key={student.phone_number}><TCell>{student.phone_number}</TCell></td>
                        <td key={student.email}><TCell>{student.email}</TCell></td>
                        <td key={student.date_format}><TCell>{student.date_format}</TCell></td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          )
        })}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </CTStyler>
    )
  }
}