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
        <div>
        {
         this.props.heroes.map( heroes =>
          <HeroesPreview { ...heroes } />)
        }
        </div>
      </div>
    );
  };
};

export default App;
