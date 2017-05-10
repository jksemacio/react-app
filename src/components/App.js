import React from 'react';
import axios from 'axios';

import Header from './Header';
import HeroesPreview from './HeroesPreview';


class App extends React.Component {
  state = {
    pageHeader: 'Welome to Heroes',
    heroes: []
  };

  componentDidMount() {
    axios.get('/api/heroes')
      .then( response => {
        console.log(response);
      })
      .catch( error => {
        console.log(error)
      });
    this.setState({
      heroes: []
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
