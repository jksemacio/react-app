import React from "react";
import ReactDom from "react-dom";

function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

const element = <Welcome name="Jan Kristoffer Semacio" />

const FunctionalComponent = () => {
    ReactDom.render(
    element,
    document.getElementById('root')
);
}

export default FunctionalComponent;