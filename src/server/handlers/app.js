import React from 'react';
const App = React.createFactory(require('../../app/components/App'));
const Page = React.createFactory(require('../../app/templates/MainTemplate'));

/**
 * @function appKickOff
 * @returns {Undefined} undefined
 * @description Renders the server side of the application mpount point
 */
function appKickOff() {
  let app = React.renderToString(App({}));
  let page = React.renderToStaticMarkup(Page(null, {__html: app}));

  this.res.writeHead(200, {'Content-Type': 'text/html'});
  this.res.end(page);
}


export default appKickOff;
