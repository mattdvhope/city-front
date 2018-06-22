import React from 'react';
import styled from "styled-components";

const ExplanationStyler = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  font-size: 135%;
`

export default () => {
	return (
		<div>
			<ExplanationStyler>
				When you [successfully] click the button, "Send this form to CEP" below, we will send an email to you. In that email, we will then direct you to our "CEP Volunteer Administrator Questionnaire." After you fill it out and submit it, we will respond to you within 72 hours.
			</ExplanationStyler>
			<hr/>
			<ExplanationStyler>
				Also after [successfully] clicking "Send this form to CEP," you will immediately become a member of CEP in "admin applicant status." You will not yet enter the City English app. If and when you are approved as an administrator for volunteers, you will then gain "admin" status. In this status, you will be able to provide an access PIN to future volunteers (Skype partners, etc) for CEP. You will also be able to log in to CEP using your email and password.
			</ExplanationStyler>
		</div>
  )
}
