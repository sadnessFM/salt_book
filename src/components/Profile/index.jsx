import React from "react";
import "./style.css";

export default ({user}) => {
    if (!user)
    {
        return <div className="profile_wrapper">
            <h1>Вы не авторизованы</h1>
        </div>
    }

    return <div className="profile_wrapper">
        <h1>Profile</h1>
        <div>Имя пользователя: {user}</div>
    </div>
}