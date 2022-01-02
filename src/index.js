import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import product from "./mock";
import { ThemeProvider } from 'styled-components';
import theme from "./theme/defaultTheme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App product={product} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

