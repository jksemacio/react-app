import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ message }) => {
  return (
    <h1 className="text-center">
      { message }
    </h1>
  );
};

const App = () => {
  return (
    <div>
      <Header message="Welcome to React" />
      <div>...</div>
    </div>
  );
};

ReactDOM.render(
  <App message="Hello props!"/>,
  document.getElementById('root')
);
