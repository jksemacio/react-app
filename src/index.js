import React from 'react';
import ReactDOM from 'react-dom';

import data from './heroesName';

import App from './components/App'

ReactDOM.render(
  <App heroes={ data.heroes } />,
  document.getElementById('root')
);
