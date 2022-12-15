import React, {useContext} from 'react';
import {Ctx} from "../App";


export default () => {
    const {animal} = useContext(Ctx);

    const style = {
        backgroundImage: animal.image ? `url(${animal.image})` : "url(https://upload.wikimedia.org/wikipedia/ru/2/24/WWF_logo.svg)"
    }

    return <main className="single-main">
        <div className="anim-wrapper">
            {typeof animal.image !== 'undefined' && (
                <div className="single-image" style={style}></div>
                )}
            
            <div className="anim-info">
                <h1>{animal.type}</h1>
                {typeof animal.description !== 'undefined' && (
                    <h3><span className="cat-name">цитата:</span> {animal.description}</h3>
                )}
                
                {typeof animal.average_height !== 'undefined' && (
                    <div><span className="cat-name">насколько здоровый:</span> {animal.average_height} см</div>
                )}

                {typeof animal.average_weight !== 'undefined' && (
                    <div><span className="cat-name">сколько килограм нахавал:</span> {animal.average_weight} кг</div>
                )}
                
                {typeof animal.lifespan !== 'undefined' && (
                    <div><span className="cat-name">срок годности:</span> {animal.lifespan} лет</div>
                )}
                
                {typeof animal.population !== 'undefined' && (
                    <div><span className="cat-name">количество ингридиентов:</span> {animal.population} особей</div>
                )}
                
                {typeof animal.status !== 'undefined' && (
                    <div><span className="cat-name">статус вк:</span> {animal.status}</div>
                )}
                
                {animal.habitat[0] !== "" && (
                    <div><span className="cat-name">где моя закладка:</span> {animal.habitat[0]}, {animal.habitat[1]}</div>
                )}
            </div>
        </div>
    </main>
}