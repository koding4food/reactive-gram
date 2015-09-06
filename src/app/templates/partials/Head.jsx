import React from 'react';


const propTypes = {
  title: React.PropTypes.string
};


const defaultProps = {
  title: 'Reactive-Gram'
};


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
