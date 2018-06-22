import React from 'react';
import styled from "styled-components";

const ExplanationStyler = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  font-size: 135%;
`

export default () => {
	return (
		<ExplanationStyler>
			If you do not yet have a PIN, please contact the "CEP volunteer administrator" from your organization or church.
		</ExplanationStyler>
  )
}
