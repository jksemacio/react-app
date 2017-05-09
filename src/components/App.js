import React from 'react';

import Header from './Header';

class App extends React.Component {
  state = {
    pageHeader: "Welome to React state"
  };

  componentDidMount() {
    debugger;
    console.log("mounted!");
  };

  componentWillUnmount() {
    debugger;
    console.log("to be unmount");
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
