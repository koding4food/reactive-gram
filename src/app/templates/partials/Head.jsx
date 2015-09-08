import React from 'react';


const propTypes = {
  title: React.PropTypes.string
};


const defaultProps = {
  title: 'Reactive-Gram'
};

/**
 * Head page component
 *
 * @class
 * @classdesc Renders the base page structure
 * @prop {String} title - contains the title of the website
 */
class Head extends React.Component {

  render() {

    return (
      <head>
        <title>{this.props.title}</title>
      </head>
    );
  }
}


Head.propTypes = propTypes;
Head.defaultProps = defaultProps;


export default Head;
