import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Modal.css';
import { formatTime } from "../util/Util";
const Modal = (props) => {
    const [movesTaken, setMovesTaken] = useState(0);
    const [modalClasses, setModalClasses] = useState("");
    const [timeTaken, setTimeTaken] = useState("00:00:00");




    useEffect(() => {

        setModalClasses("modal_game_over");
        if (props.moves !== undefined)
            setMovesTaken(props.moves);
        if (props.time !== undefined) {
            setTimeTaken(formatTime(props.time.hours) + ":" + formatTime(props.time.minutes) + ":" + formatTime(props.time.seconds));
        }


    }, [props])


    return (
        <div className={modalClasses} >
            <button className="btn btn-lg gameOverBtn gameOverLabelBtn">GAME OVER</button>
            <div className="gameOverResultDiv">
                <div className="gameOverText gameOverTextHeading">MOVES TAKEN</div>
                <div className="gameOverText">{movesTaken}</div>
                <div className="gameOverText gameOverTextHeading">TIME SPENT</div>
                <div className="gameOverText">{timeTaken}</div>
            </div>
            <Link to={{ pathname: "/game", search: `?level=${props.level}` }} className="homeLink"><button className="btn gameOverReplayBtn gameOverBtn"><i className="text-center replay_icon_login"></i></button></Link>
            <Link to="/" className="homeLink">  <button className="btn gameOverHomeBtn gameOverBtn"><i className="text-center home_icon"></i></button></Link>
        </div>

    )

}
export default Modal;