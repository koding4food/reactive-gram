import React from 'react';
const Head = require('./partials/Head');
const Body = require('./partials/Body');


const propTypes = {
  children: React.PropTypes.shape({
    __html: React.PropTypes.string.isRequired
  }).isRequired
};


class MainTemplate extends React.Component {

  render() {

    return (
      <html>
        <Head />
        <Body>
          <div id="reactive-gram" dangerouslySetInnerHTML={this.props.children} />
        </Body>
      </html>
    );
  }
}


MainTemplate.propTypes = propTypes;


export default MainTemplate;
