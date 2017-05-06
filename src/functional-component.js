import React from "react";
import ReactDom from "react-dom";

function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

const App = () => {
    return <div>
    <Welcome name="Jan Kristoffer Semacio" />
    <Welcome name="Minna" />
    <Welcome name="Stranger" />
    </div>
};

const FunctionalComponent = () => {
    ReactDom.render(
    <App />,
    document.getElementById('root')
);
}

export default FunctionalComponent;