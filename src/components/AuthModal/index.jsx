import React, {useContext} from "react";
import cross from "bootstrap-icons/icons/x.svg";
import AuthLoginContent from "../AuthLoginContent";
import AuthRegContent from "../AuthRegContent";
import {Ctx} from "../../App";

export default () => {
    const {loginRegView, setView, setAuthModalState, authModalState, setCurUser} = useContext(Ctx);

    const viewHandler = () => {
        if (loginRegView === "login") {
            setView("reg");
        }
        else setView("login");
    }

    const stateHandler = () => {
        setAuthModalState(!authModalState);
    }

    const modalStyle = {
        display: authModalState ? "flex" : "none"
    }

    return <div className="modal_wrapper" style={modalStyle}>
        <div className="modal">
            <div className="modal__close" onClick={stateHandler}><img src={cross} alt="modal close btn"/></div>
            <div className="modal__content">
                {loginRegView === "login" ? <AuthLoginContent displayHandler={stateHandler} setView={viewHandler} setCurUser={setCurUser}/> : <AuthRegContent displayHandler={stateHandler} setView={viewHandler} setCurUser={setCurUser}/>}
            </div>
        </div>
    </div>
}