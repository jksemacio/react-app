import React from 'react';

import Header from './Header';
import HeroesPreview from './HeroesPreview';

import data from '../heroesName';

class App extends React.Component {
  state = {
    pageHeader: 'Welome to Heroes',
    heroes: []
  };

  componentDidMount() {
   this.setState({
     heroes: data.heroes
   });
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
         this.state.heroes.map( heroes =>
          <HeroesPreview key={ heroes.id } { ...heroes } />)
        }
        </div>
      </div>
    );
  };
};

export default App;
