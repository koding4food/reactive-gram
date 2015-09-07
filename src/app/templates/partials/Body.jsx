import React from 'react';


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
