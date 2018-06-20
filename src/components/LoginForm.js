import React from "react"
import { withRouter } from "react-router-dom"
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default withRouter(({ handleSubmit, handleUpdate, emailMessage, emailValue, passwordMessage, passwordValue, emailGroupClass, passwordGroupClass, history }) => (
  <form
    className="form-signin"
    method="post"
    onSubmit={event => {
      event.preventDefault()
      handleSubmit(event)
      // history.push(`/app/profile `)
    }}
  >
    <p>
      For this demo, please log in with the email <code>matt@test.tv</code> and the
      password <code>password</code>.
    </p>
    <h2 className="form-signin-heading">Create Account</h2>

    <input type="hidden" name="utf8" value="✓" />

    <div className={emailGroupClass}>
      <input id="formControlsEmail" type="text" name="email" className="form-control"
        placeholder="Email address" onChange={handleUpdate} value={emailValue} autoFocus />
      <span className="help-block">{emailMessage}</span>
    </div>

    <div className={passwordGroupClass}>
      <input id="formControlsPassword" type="password" name="password" className="form-control"
        placeholder="Password" onChange={handleUpdate} value={passwordValue} />
      <span className="help-block">{passwordMessage}</span>
    </div>

    <button className="btn btn-lg btn-primary btn-block" type="submit">Log In</button>

  </form>
))
