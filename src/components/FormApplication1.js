import React, { Component } from 'react';
import Link from 'gatsby-link';
import axios from 'axios'
import styled from "styled-components";
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio, Button } from 'react-bootstrap';
import ApplicationExplanation from './ApplicationExplanation';
import PaymentInfo from './PaymentInfo';

const FormStyler = styled.span`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  font-size: 150%;
`

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default class FormApplication1 extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      class_times: [],
      off_site_locations: [],
      off_site_shown: false,
      off_site_location_id: '',
      guest: true,
      nickname: '',
      first_name: '',
      last_name: '',
      gender: 'ผู้ชาย',
      phone_number: '',
      email: '',
      class_time_scheduled_1: '',
      class_time_scheduled_2: 'select_option',
      window: undefined
    };
  }

  componentDidMount() {
    axios.get(`${process.env.GATSBY_API_URL}/class_times.json`)
      .then((response) => {
        const class_times = this.filterSortClassTimes(response.data);
        this.setState({ class_times });
      });

    axios.get(`${process.env.GATSBY_API_URL}/off_site_locations.json`)
      .then((response) => {
        const off_site_locations = this.filterOffsiteLocations(response.data);
        this.setState({ off_site_locations });
      });
    this.setState({ window: window });
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

  filterOffsiteLocations(off_site_locations) {
    var locs = [];
    off_site_locations.forEach(function(loc) {
      loc.completed ? null : locs.push(loc);
    });
    return locs;
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value});
    e.target.value === "Off-site class (not at our center)" ? this.addOffsiteLocations(e) : this.removeOffsiteLocations(e);
  }

  handleOffsiteChoice = e => {
    console.log(e.target.value)
    this.setState({off_site_location_id: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

    const user = {
      guest: true,
      nickname: this.state.nickname,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      gender: this.state.gender,
      phone_number: this.state.phone_number,
      email: this.state.email,
      off_site_location_id: this.state.off_site_location_id
    }

    axios.post(`${process.env.GATSBY_API_URL}/users`, {
      utf8: "✓",
      class_time_scheduled_1: this.state.class_time_scheduled_1,
      class_time_scheduled_2: "select_option",
      user: user,
    })
    .then(response => {
      console.log(response)
      this.props.handleClose();
    })
    .catch(error => console.log(error))
  }

  addOffsiteLocations(e) {
    this.setState({ off_site_shown: true });
  }

  removeOffsiteLocations(e) {
    console.log("in removeOffsiteLocations")
    this.setState({ off_site_shown: false, off_site_location_id: '' });
  }

  render() {
    let labelItems = [];
    if (this.state.window) {
      const { language } = this.state.window.localStorage;

      if (language === "thai") {
        labelItems = ["ชื่อเล่น (ภาษาอังกฤษ)",
                      "ชื่อจริง (ภาษาอังกฤษ)",
                      "นามสกุล (ภาษาอังกฤษ)",
                      "ชายหรือหญิง",
                      "เบอร์โทรศัพท์ (จำเป็น)",
                      "อีเมล (ไม่จำเป็น)",
                      "เลือกตารางเวลาเรียนของคุณ (หมุนหน้าจอโทรศัพท์ของคุณเพื่อดูภาพที่กว้างขึ้น)",
                      "เลือกนอกสถานที่ของคุณ (หมุนหน้าจอโทรศัพท์ของคุณเพื่อดูภาพที่กว้างขึ้น)",
                      "ทางเลือก"]
      } else {
        labelItems = ['Nickname (in English)',
                      'First Name (in English)',
                      'Last Name (in English)',
                      'Gender',
                      'Phone Number (required)',
                      'Email Address (optional)',
                      'Choose your schedule option (rotate your mobile screen for a wider view).',
                      'Choose your offsite location (rotate your mobile screen for a wider view).',
                      'Choice'];
      }

      return (
        <div>
          <ApplicationExplanation />
          <br/>
          <hr/>
          <FormStyler>
          <form onSubmit={this.handleSubmit} noValidate="noValidate" encType="multipart/form-data" action="/" acceptCharset="UTF-8">
            <input type="hidden" name="utf8" value="✓" />
        {/* <input type="hidden" name="authenticity_token" value="{this.state.csrf_token}" />  */}
            <input type="hidden" name="guest" value="true" />

            <FieldGroup
              id="formControlsText"
              label={labelItems[0]}
              name="nickname"
              type="text"
              onChange={this.handleChange}
              placeholder="ชื่อเล่น (ภาษาอังกฤษ)"
            />
            <FieldGroup
              id="formControlsText"
              label={labelItems[1]}
              name="first_name"
              type="text"
              onChange={this.handleChange}
              placeholder="ชื่อจริง (ภาษาอังกฤษ)"
            />
            <FieldGroup
              id="formControlsText"
              label={labelItems[2]}
              name="last_name"
              type="text"
              onChange={this.handleChange}
              placeholder="นามสกุล (ภาษาอังกฤษ)"
            />

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>{labelItems[3]}</ControlLabel>
              <FormControl
                componentClass="select"
                onChange={this.handleChange}
                placeholder="select gender"
                name="gender">
                <option value="ผู้ชาย">ผู้ชาย</option>
                <option value="ผู้หญิง">ผู้หญิง</option>
              </FormControl>
            </FormGroup>

            <FieldGroup
              id="formControlsText"
              label={labelItems[4]}
              name="phone_number"
              type="text"
              onChange={this.handleChange}
              placeholder="เบอร์โทรศัพท์"
            />
            <FieldGroup
              id="formControlsEmail"
              label={labelItems[5]}
              name="email"
              type="email"
              onChange={this.handleChange}
              placeholder="อีเมล"
            />
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>{labelItems[6]}</ControlLabel>
              <FormControl
                componentClass="select"
                onChange={this.handleChange}
                placeholder="select class time"
                name="class_time_scheduled_1">
                <option value="select">-- {labelItems[8]} --</option>
                {(language === "thai") ? (
                    this.state.class_times.map((e, key) => {
                      return <option key={e.period} value={e.period}>{e.period_thai} </option>;
                    })
                  ) : (
                    this.state.class_times.map((e, key) => {
                      return <option key={e.period} value={e.period}>{e.period} </option>;
                    })
                  )
                }
              </FormControl>
            </FormGroup>


            {this.state.off_site_shown ? (
              <FormGroup controlId="formControlsSelectOffsite">
                <ControlLabel>{labelItems[7]}</ControlLabel>
                <FormControl
                  componentClass="select"
                  onChange={this.handleOffsiteChoice}
                  placeholder="select class time"
                  name="off_site_location">
                  <option value="select">-- {labelItems[8]} --</option>
                  {(language === "thai") ? (
                      this.state.off_site_locations.map((e, key) => {
                        return <option key={e.location_thai} value={e.id}>{e.location_thai} </option>;
                      })
                    ) : (
                      this.state.off_site_locations.map((e, key) => {
                        return <option key={e.location_english} value={e.id}>{e.location_english} </option>;
                      })
                    )
                  }
                </FormControl>
              </FormGroup>
            ) : (
              <span />
            )}
  
            <PaymentInfo />
            <Button className="btn btn-success" bsSize="large" type="submit">Submit</Button>
          </form>
          </FormStyler>
        </div>
      );
    }
    return <span />;
  }
}
