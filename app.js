'use strict';
const messages = require('./controllers/remote-control');
const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const route = require('koa-route');
const koa = require('koa');
const path = require('path');
const IO = require('koa-socket');
const mediaControl = require('./MediaControl.js');

const app = module.exports = new koa();
const io = new IO();
// Logger
app.use(logger());
app.use(route.get('/', messages.home));
// Serve static files
app.use(serve(path.join(__dirname, 'public')));
// Compress
app.use(compress());

io.attach(app);
io.on('MediaControl', (ctx, data) => {
  // ctx is passed all the way through to the end point
  if (data === 'play') {
    mediaControl.play();
  } else if (data === 'prev') {
    mediaControl.prevTrack();
  } else if (data === 'next') {
    mediaControl.nextTrack();
  } else if (data === 'mute') {
    mediaControl.mute();
  } else if (data === 'volumeUp') {
    mediaControl.volumeUp();
  } else if (data === 'volumeDown') {
    mediaControl.volumeDown();
  }
});

if (!module.parent) {
  app.listen(80);
  console.log('listening on port 80');
}
