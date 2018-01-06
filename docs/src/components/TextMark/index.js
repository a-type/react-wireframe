import React from 'react';

export default ({ children, filled, color = 'black' }) => (
  <svg
    height="100"
    viewBox="0 0 700 70"
  >
    <text x="350" y="60" textAnchor="middle" style={{ fontFamily: '"Open Sans"', fontSize: '64px', stroke: color, strokeWidth: '1px', fill: filled ? color : 'transparent' }}>
      {children}
    </text>
  </svg>
);
