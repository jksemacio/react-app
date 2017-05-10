import config from './config';
import axios from 'axios';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/heroes`)
    .then( response => {
      return {
        initialMarkup: ReactDOMServer.renderToString(<App initialData={response.data.heroes}/>),
        initialData: response.data
      };
    })
    .catch( error => {
      console.log(error)
    });

export default serverRender;
