import React from 'react';

/**
 * Main application component
 *
 * @class
 * @classdesc This is the application entry point
 * @prop {String} welcomeMessage - contains the welcome message to be shown
 */
class App extends React.Component {

  render() {
    let welcomeMessage = this.props.welcomeMessage || 'this is something different';

    return (
      <div>{welcomeMessage}</div>
    );
  }
}


export default App;
