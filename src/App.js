import React, { Component } from 'react';

import People from './containers/People';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ol>
          <li>Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
        </ol>
        <People />
      </div>
    );
  }
}

export default App;
