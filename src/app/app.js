import React from 'react';
// import router from 'director/lib/director/browser';
const App = require('./components/App');


React.render(
  React.createElement(App, {welcomeMessage: 'it definitively is!'}),
  document.getElementById('reactive-gram')
);
