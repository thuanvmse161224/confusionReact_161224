import React from "react";
import Avatar from "./Avatar"

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div>
            <Avatar user={props.author}/>
            <div> {props.text} </div>
            <div> {formatDate(props.date)} </div>
        </div>
    )
}

export default Comment;