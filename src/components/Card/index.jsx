import React, {useContext} from "react";
import {Link} from "react-router-dom";
import "./style.css";
import {Ctx} from "../../App";

export default ({animal}) => {
    const {setAnimal} = useContext(Ctx);

    const bg_img = animal.image ? `url(${animal.image})` : "url(https://upload.wikimedia.org/wikipedia/commons/b/b1/Heroin_-_Heroine.svg)";
    const style = {
        background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), " + bg_img + " center center no-repeat",
        backgroundSize: animal.image ? "cover" : "contain"
    }

    return <div className="card" style={style} onClick={() => setAnimal(animal)}>
        <Link to={`/animals/${animal._id}`}>
            {animal.type}
        </Link>
    </div>
}