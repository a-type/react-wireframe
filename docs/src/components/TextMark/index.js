import React from 'react';

export default ({ children, filled, color = 'black' }) => (
  <svg
    width="600"
    height="100"
    viewBox="0 0 600 100"
  >
    <text x="0" y="50" style={{ fontFamily: '"Open Sans"', fontSize: '64px', stroke: color, strokeWidth: '1px', fill: filled ? color : 'transparent' }}>
      {children}
    </text>
  </svg>
);
