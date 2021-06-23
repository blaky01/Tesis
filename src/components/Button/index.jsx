/* eslint-disable react/prop-types */
import React from 'react';
import './Button.css';

export const Button = ({ children, ...props}) => (
    <button className="button" type="button" {...props}>
      <h6>{children}</h6>
    </button>
  );

export default Button;
