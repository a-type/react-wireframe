import React from 'react';
import { withTheme } from 'styled-components';

export default withTheme(({ theme: { colors: { accents } }, children, filled }) => (
  <svg
    height="100"
    viewBox="0 0 700 70"
  >
    <text x="350" y="60" textAnchor="middle" style={{ fontFamily: '"Open Sans"', fontSize: '64px', stroke: accents[0], strokeWidth: '1px', fill: filled ? accents[0] : 'transparent' }}>
      {children}
    </text>
  </svg>
));
