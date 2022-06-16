import React from "react";

function Avatar(props) {
    return (
        <div>
            <img src={props.user.avatarUrl} alt={props.user.name}/>
            <div> {props.user.name} </div>
        </div>

    )
}

export default Avatar;