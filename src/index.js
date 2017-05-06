var React = require("react");
var ReactDom = require("react-dom");

ReactDom.render(
    React.createElement(
        'h1',
        {className: 'greeting'},
        'Hello, world!'
        ),
        document.getElementById('root')
);
