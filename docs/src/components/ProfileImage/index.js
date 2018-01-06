import React from 'react';
import { withTheme } from 'styled-components';
import color from 'tinycolor2';

export default withTheme(({ theme: { colors: { accent } }, imageSrc, width = '100%', height = 'auto' }) => {
  const light = color(accent.light).toRgb();
  const dark = color(accent.dark).toRgb();
  return (
    <div style={{ width, height }}>
      <svg height="0" width="0">
        <filter id="duotone">
          <feColorMatrix type="matrix" result="grayscale"
            values={
              '0 0 1 0 0 ' +
              '0 0 1 0 0 ' +
              '0 0 1 0 0 ' +
              '0 0 0 1 0'
            }
          >
          </feColorMatrix>
          <feComponentTransfer colorInterpolationFilters="sRGB" result="duotone">
            <feFuncR type="table" tableValues={`${dark.r / 255.0} ${light.r / 255.0}`}></feFuncR>
            <feFuncG type="table" tableValues={`${dark.g / 255.0} ${light.g / 255.0}`}></feFuncG>
            <feFuncB type="table" tableValues={`${dark.b / 255.0} ${light.b / 255.0}`}></feFuncB>
            <feFuncA type="table" tableValues="0 1"></feFuncA>
          </feComponentTransfer>
        </filter>
      </svg>
      <img
        src={imageSrc}
        style={{
          filter: 'url(#duotone)',
          width,
          height,
          borderRadius: '100%',
          boxShadow: '0 8px 4px 0 rgba(0, 0, 0, 0.15)'
        }}
      />
    </div>
  );
});
