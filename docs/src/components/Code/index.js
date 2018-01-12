import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { atomDark } from 'react-syntax-highlighter/styles/prism';
import Container from './Container';
import { withTheme } from 'styled-components';
import color from 'tinycolor2';
import Inline from './Inline';

const Code = withTheme(({ theme, children }) => {
  const styles = {
    ...atomDark,
    'code[class*="language-"]': {
      ...atomDark['code[class*="language-"]'],
      color: 'inherit',
      textShadow: 'none',
    },
    'pre[class*="language-"]': {
      ...atomDark['pre[class*="language-"]'],
      color: 'inherit',
      background: 'transparent',
      textShadow: 'none',
    },
    comment: {
      color: color(theme.colors.text).lighten(50).toHexString(),
    },
    punctuation: {
      color: 'inherit',
    },
    property: {
      color: theme.colors.accents[0],
    },
    keyword: {
      color: theme.colors.accents[2],
    },
    'class-name': {
      color: theme.colors.accents[0],
    },
    boolean: {
      color: theme.colors.accents[2],
    },
    symbol: {
      color: 'inherit',
    },
    number: {
      color: theme.colors.accents[2],
    },
    string: {
      color: theme.colors.accents[3],
    },
    char: {
      color: theme.colors.accents[0],
    },
    builtin: {
      color: theme.colors.accents[2],
    },
    variable: {
      color: theme.colors.accents[2],
    },
    operator: {
      color: theme.colors.accents[2],
    },
    function: {
      color: color(theme.colors.accents[1]).lighten(20).toString('hex6'),
    },
  };

  return (
    <Container>
      <SyntaxHighlighter language="javascript" style={styles}>
        {children}
      </SyntaxHighlighter>
    </Container>
  );
});

Code.Inline = Inline;

export default Code;
