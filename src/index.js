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

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
};

const user = {
    firstName: "Jan Kristoffer",
    lastName: "Semacio"
};

const element = (
    <h1>Hello, {formatName(user)}!</h1>
);

ReactDom.render(
    element,
    document.getElementById('root')
);