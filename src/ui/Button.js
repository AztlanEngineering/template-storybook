
import React from 'react'
import PropTypes from "prop-types";
//import { Button } from '@storybook/react/demo';

const Button = ({children}) => (
  <button>THis is the button component { children || 'hey' }</button>
) 

Button.propTypes = {
  children:PropTypes.string,
  otherProp:PropTypes.string.isRequired
}

export default Button

