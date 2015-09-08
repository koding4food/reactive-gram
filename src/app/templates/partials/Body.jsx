import React from 'react';

/**
 * Body page component
 *
 * @class
 * @classdesc Renders content inside the body section
 * @prop {Object} children - content to be render on the page body
 */
class Body extends React.Component {

  render() {

    return (
      <body>
        {this.props.children}
        <div id="footer-scripts">
          <script type="text/javascript" src="/js/app.bundle.js"></script>
        </div>
      </body>
    );
  }
}


export default Body;
