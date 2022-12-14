import React, {useContext, useState} from "react";
import {Ctx} from "../../App";
import "./style.css";
import Card from "../Card";
import "regenerator-runtime/runtime";

export default () => {

    const {animals, searchText, setSearchText, setAnimModalState, statuses} = useContext(Ctx);

    const [sorted, setSorted] = useState("");
    const [sorted_animals, setSortedAnimals] = useState();

    let arr = animals.filter(animal => {
        if (typeof animal.type !== "undefined") {
            if (animal.type.toLowerCase().search(searchText.toLowerCase()) !== -1)
            return animal
        }
    });

    const style_sort_alphabet = {
        outline: sorted === "alphabet" ? "#fff solid 1px" : "none"
    }

    const style_sort_status = {
        outline: sorted === "status" ? "#fff solid 1px" : "none"
    }

    const sortByStatus = (sort_type) => {
        sorted ? sorted === sort_type ? setSorted("") : setSorted(sort_type) : setSorted(sort_type);
        if (sorted) {
            if (sorted === sort_type){
                setSortedAnimals(animals.slice());
            }
            else if (sort_type === "status"){
                sorted_animals.sort((anim1, anim2) => statuses.indexOf(anim2.status) - statuses.indexOf(anim1.status));
            }
            else if (sort_type === "alphabet"){
                sorted_animals.sort((anim1, anim2) => anim1.type.localeCompare(anim2.type));
            }
        }
        else {
            if (sort_type === "status"){
                setSortedAnimals(animals.slice().sort((anim1, anim2) => statuses.indexOf(anim2.status) - statuses.indexOf(anim1.status)));
            }
            else if (sort_type === "alphabet"){
                setSortedAnimals(animals.slice().sort((anim1, anim2) => anim1.type.localeCompare(anim2.type)));
            }
        }
    }

    return <main>
        <h1>зоопарк Северного Чертаново</h1>

        <div className="top_animal_panel">
            <input type="search" className="search__inp" value={searchText} placeholder="кто" onChange={e => setSearchText(e.target.value)}/>
            <button className="sort" style={style_sort_status} onClick={() => sortByStatus("status")}>найти по авторитету</button>
            <button className="sort" style={style_sort_alphabet} onClick={() => sortByStatus("alphabet")}>по классному журналу</button>
            <div className="buttons">
                <button className="add" onClick={() => setAnimModalState("add")}>записать в тетрадь смерьи</button>
                <button className="update" onClick={() => setAnimModalState("update")}>сменить пасспорт</button>
            </div>
        </div>

        {searchText && <div>Система поиска пидорасов: {searchText}</div>}
        <ul className="cards">
            {sorted ? sorted_animals.map(a =>
                    <Card key={a["_id"]} animal={a}/>
                 ) : searchText ? arr.map(a =>
                    <Card key={a["_id"]} animal={a}/>
                 ) :
                 animals.map(a => 
                    <Card key={a["_id"]} animal={a}/>
            )}
        </ul>
    </main>
}