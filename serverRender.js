import React from 'react';

import ReactDOMServer from 'react-dom/server';

import axios from 'axios';

import config from './config';

import App from './src/components/App';

const serverRender = () => {
  return axios.get(`${config.serverUrl}/api/v1/tasks`)
    .then((resp) => {
      //console.log(resp.data);
      return ReactDOMServer.renderToString(<App initialTasks={resp.data.tasks} />);
    })
};

export default serverRender;