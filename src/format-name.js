import React from "react";
import ReactDom from "react-dom";

const formatName = (user) => {
    return user.firstName + ' ' + user.middleInitial + '. ' + user.lastName;
};

const user = {
    firstName: 'Jan Kristoffer',
    middleInitial: 'S',
    lastName: 'Semacio'
};

const element = (
    <h1>Hello, {formatName(user)}!</h1>
);

const FormatName = () => {
    ReactDom.render(
    element,
    document.getElementById('root')
);
}

export default FormatName;
