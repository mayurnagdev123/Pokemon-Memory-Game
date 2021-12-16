import React, { useEffect, useRef, useState } from "react";
import './Card.css'
import { getImageBasedOnKey } from "../util/Util";

const Card = (props) => {
    const [pokemonImage, setPokemonImage] = useState(null);
    const cardRef = useRef();
    useEffect(() => {
        var letter = props.letter;
        var pokemonImage = getImageBasedOnKey(letter);

        var imagePic = require(`../assets/${pokemonImage}`);

        setPokemonImage(imagePic.default);
    }, [props])
    return (
        <div className="scene scene--card" >
            <div className="card" ref={cardRef} id={props.id} onClick={() => props.clickedHandler(cardRef)}>
                <div className="card__face card__face--front"><div className="front--text">?</div></div>
                <div className="card__face card__face--back"><img src={pokemonImage} style={{ height: '100%', width: '100%', verticalAlign: 'text-top' }} alt={props.letter} /> </div>
            </div>
        </div>
    )

}
export default Card;