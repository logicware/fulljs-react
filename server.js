import config, { nodeEnv, logStars } from './config';
import express from 'express';
import apiRouter from './api';

import sassMiddleWare from 'node-sass-middleware';
import path from 'path';

const server = express();

server.use(sassMiddleWare(
  {
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
  })
);

server.set('view engine', 'ejs');

server.use('/api/v1', apiRouter);
server.use(express.static('public'));

import serverRender from './serverRender';


server.get('/', (req, res) => {

  serverRender()
    .then((content) => {
      res.render('index', {
        content: content
      });
    })
    .catch((err) => console.log(err));

});

server.listen(config.port, config.host, () => {
  logStars('Express Server listening on port ' + config.port);
});