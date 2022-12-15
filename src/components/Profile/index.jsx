import React from "react";
import "./style.css";

export default ({user}) => {
    if (!user)
    {
        return <div className="profile_wrapper">
            <h1>ты кто</h1>
        </div>
    }

    return <div className="profile_wrapper">
        <h1>Profile</h1>
        <div>твое имя {user}</div>
    </div>
}