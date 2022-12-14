import React from "react";
import "./style.css";

export default () => {
    return <footer>
        <span className="hedge_icon">соляга версии </span>{new Date().getFullYear()}
    </footer>
}