import React, { useEffect, useState } from 'react'
import RandomCards from '../RandomCards/RandomCards';
import { createRandomString } from '../util/Util';


const Game = (props) => {
    const [randomString, setRandomString] = useState(null);
    const [gameLevel, setGameLevel] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(props.location.search);
        const level = urlParams.get('level') || undefined;
        setGameLevel(level);
        switch (level) {
            case "Easy":
                createRandomString(12, function (randomStr) {
                    setRandomString(randomStr);
                });
                break;
            case "Medium":
                createRandomString(16, function (randomStr) {
                    setRandomString(randomStr);
                });
                break;
            case "Hard":
                createRandomString(20, function (randomStr) {
                    setRandomString(randomStr);
                });
                break;
            case "Very Hard":
                createRandomString(24, function (randomStr) {
                    setRandomString(randomStr);
                });
                break;
            default:
                props.history.push("/");
        }

    }, [props])




    return (
        <div>
            {randomString !== null ? <RandomCards randomString={randomString} level={gameLevel} /> : null}
        </div>
    )

}
export default Game;