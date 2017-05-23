import React, { Component } from 'react';
import styles from './App.css'

class App extends Component {
    render() {
        return <h1 className={styles.app}>Welcome to Heroku from CircleCI!</h1>;
    };
};

export default App;