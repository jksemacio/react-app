import React from "react";
import ReactDom from "react-dom";

const HelloWorld = () => {
    ReactDom.render(
    <h1 className='greeting'>Hello, world!</h1>,
        document.getElementById('root')
    )
};

export default HelloWorld;