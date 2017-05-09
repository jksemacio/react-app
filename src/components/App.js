import React from 'react';

import Header from './Header';

class App extends React.Component {
  state = {
    pageHeader: "Welome to React state"
  };
  render() {
    return (
      <div>
        <Header message={ this.state.pageHeader} />
        <div>...</div>
      </div>
    );
  };
};

export default App;
