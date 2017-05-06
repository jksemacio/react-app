import React from "react";
import ReactDom from "react-dom";

const HelloWorld = () => {
    ReactDom.render(
    React.createElement(
        'h1',
        {className: 'greeting'},
        'Hello, world!'
        ),
        document.getElementById('root')
    )
};

export default HelloWorld;