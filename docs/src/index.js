import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './configureStore';

import { ThemeProvider, injectGlobal } from 'styled-components';
import theme from './theme';

import Page from './components/PageSections';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`;

const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <div>
        <Page />
      </div>
    </ThemeProvider>
  </Provider>,
  document.getElementById('main'),
);
