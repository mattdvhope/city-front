import React from "react"
import PropTypes from "prop-types"
import { Redirect, Route } from "react-router-dom"
import { isLoggedIn } from "../utils/auth"

// More info at https://reacttraining.com/react-router/web/example/auth-workflow

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!isLoggedIn()) {
        return <Redirect to={{ pathname: `/` }} />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute

