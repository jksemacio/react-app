import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ message }) => {
  return (
    <h1 className="text-center">
      { message }
    </h1>
  );
};

Header.propTypes = {
  message: React.PropTypes.string
};

Header.defaultProps = {
  message: 'this is the default props'
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
