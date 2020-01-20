import React from 'react';
import { action } from '@storybook/addon-actions';
import PropTypes from "prop-types";
//import { Button } from '@storybook/react/demo';

const Button = ({children}) => (
  <button>{ children || 'hey' }</button>
) 

Button.propTypes = {
  children: PropTypes.string
}

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
