import React from "react";

export default ({curUser}) => {
    return <>
        <div>{curUser}</div>
        <button className="auth_logout" onClick={() => {}}>уйти и слава богу</button>
    </>
}