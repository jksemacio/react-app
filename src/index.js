import React from "react";
import ReactDom from "react-dom";

function formatName(user) {
    return user.firstName + ' ' + user.middleName + ' ' + user.lastName;
};

const user = {
    firstName: "Jan Kristoffer",
    middleName: "Salmo",
    lastName: "Semacio"
};

const element = (
    <h1>Hello, {formatName(user)}!</h1>
);

ReactDom.render(
    element,
    document.getElementById('root')
);