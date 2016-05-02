'use strict';
const views = require('co-views');
const parse = require('co-body');
const ip = require('ip');
const render = views(__dirname + '/../views', {
  map: { html: 'swig' }
});

module.exports.home = function *home(ctx) {
  this.body = yield render('index', { 'title': 'Media remote control','ip':ip.address() });
};

const asyncOperation = () => callback =>
  setTimeout(
    () => callback(null, 'this was loaded asynchronously and it took 2 seconds to complete'),
    2000);

const returnsPromise = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve('promise resolved after 2 seconds'), 2000));

module.exports.delay = function *delay() {
  this.body = yield asyncOperation();
};

module.exports.promise = function *promise() {
  this.body = yield returnsPromise();
};
