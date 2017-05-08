import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <h2 className="text-center">
      Hello React from Function Component!
    </h2>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
