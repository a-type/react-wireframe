import React from 'react';
import { withTheme } from 'styled-components';
import tc from 'tinycolor2';

export default withTheme(({ theme: { colors: { accents } }, color, size = '100px' }) => {
  const light = color || accents[3];
  const dark = tc(light).darken().toHexString();
  return (
    <div style={{ width: size, height: size, background: light }}>
      <svg viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="30"
          fill={dark}
        />
        <circle
          cx="50"
          cy="133"
          r="50"
          fill={dark}
        />
      </svg>
    </div>
  );
});
