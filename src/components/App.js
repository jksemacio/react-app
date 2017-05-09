import React from 'react';

import Header from './Header';
import HeroesPreview from './HeroesPreview';

class App extends React.Component {
  state = {
    pageHeader: 'Welome to Heroes'
  };

  componentDidMount() {
    // ..
  };

  componentWillUnmount() {
    // ..
  };

  render() {
    return (
      <div className="App">
        <Header message={ this.state.pageHeader } />
        <HeroesPreview { ...this.props.heroes[0] } />
      </div>
    );
  };
};

export default App;
