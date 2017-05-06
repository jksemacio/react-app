import React from "react";
import ReactDom from "react-dom";
import Comment from "./comment-component";

const author = {
    name: "jksemacio",
    avatarUrl: "http://lorempixel.com/200/200/"
};
const text = "hahaha";
const date = "04/10/1988";

ReactDom.render(
    <Comment author={author} text={text} date={date} />,
    document.getElementById('root')
);