import React from "react"
import { Grid, Row, Col } from 'react-bootstrap';
import Link from 'gatsby-link'
import { navigateTo } from "gatsby-link"
import View from "./View"

import { getCurrentUser } from "../utils/auth"
import styled from "styled-components";

const DashStyler = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  font-size: 200%;
`

const LinkStyler = styled.a`
  cursor: pointer;
`

export default () => {
  return (
    <DashStyler className="container">
      <hr/>
      <Grid>
      <p>Welcome to the "City English Project," Alex. You are here in leader status.</p>
      <hr/>
        <Row className="show-grid">
          <Col sm={6} md={3}>
            <br />
            <Link to="/app/view-class-times">View class times & the students in them</Link>
          </Col>
          <Col sm={6} md={3}>
            <br />
            <Link to="/app/create-or-delete">Create or Delete class times (at CEP center)</Link>
          </Col>
          <Col sm={6} md={3}>
            <br />
            <Link to="/app/off-site-locations">Create or Archive class times (at off-site location)</Link>
          </Col>
          <Col sm={6} md={3}>
            <br />
            <Link to="/app/former-students">Click here to see a list of former CEP students.</Link>
          </Col>
        </Row>
      </Grid>
      <br/>
      <hr/>
    </DashStyler>
  )
}

