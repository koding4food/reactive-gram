import React from 'react';


class App extends React.Component {

  render() {
    let welcomeMessage = this.props.welcomeMessage || 'this is something different';

    return (
      <div>{welcomeMessage}</div>
    );
  }
}


export default App;
