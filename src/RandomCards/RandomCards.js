import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import ShowCards from "./ShowCards";
import './Card.css'
import { useStopwatch } from "react-timer-hook";
import { formatTime } from "../util/Util";
import { Redirect } from "react-router-dom";

const RandomCards = (props) => {

    const [cardsArray, setCardsArray] = useState(null);
    const [firstCardChosen, setFirstCardChosen] = useState(null);
    const [secondCardChosen, setSecondCardChosen] = useState(null);
    const [totalCardsFlipped, setTotalCardsFlipped] = useState(0);
    const [totalCorrectCardsChosen, setTotalCorrectCardsChosen] = useState(0);
    const [moves, setMoves] = useState(0);
    const [showGameOverModal, setShowGameOverModal] = useState(false);
    const randomCardDivRef = useRef();
    const [stopwatchStarted, setStopwatchStarted] = useState(false);
    const [time, setTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const {
        seconds,
        minutes,
        hours,
        start,
        pause
    } = useStopwatch({ autoStart: false });

    useEffect(() => {

        var randomString = props.randomString;
        var len = randomString.length;
        var noOfColumns = len / 4;
        var cards = [];
        var cardSet = [];
        for (var j = 0; j < randomString.length; j++) {

            if (j === 0 || j % noOfColumns !== 0) {
                cards.push(<Card clickedHandler={cardClickedHandler} id={j} key={j} letter={randomString.charAt(j)} />);
            }
            else {
                cardSet.push(<ShowCards key={j + 40} cardsArray={cards} columns={noOfColumns} />);
                cards = [];
                cards.push(<Card clickedHandler={cardClickedHandler} id={j} key={j} letter={randomString.charAt(j)} />);
            }

        }
        if (j === randomString.length) {
            cardSet.push(<ShowCards key={j + 40} cardsArray={cards} columns={noOfColumns} />);
            setCardsArray(cardSet);
        }
    }, [props]);

    useEffect(() => {
        if (firstCardChosen !== null && !stopwatchStarted) {
            start();
            setStopwatchStarted(true);
        }
        if (totalCorrectCardsChosen === props.randomString.length) {
            pause();
            setTime({
                hours: hours,
                minutes: minutes,
                seconds: seconds
            })
            setShowGameOverModal(true);


        }
        if (totalCardsFlipped === 2) {
            setMoves(move => {
                return move + 1
            })
            randomCardDivRef.current.style.pointerEvents = 'none';
            if (firstCardChosen.children[1].firstChild.alt.localeCompare(secondCardChosen.children[1].firstChild.alt) === 0) {

                setTimeout(() => {
                    firstCardChosen.style.display = 'none';
                    secondCardChosen.style.display = 'none';
                    randomCardDivRef.current.style.pointerEvents = 'auto';
                    setTotalCorrectCardsChosen(prevTotalCorrectCardsChosen => {
                        return prevTotalCorrectCardsChosen + 2;
                    })
                }, 1500)

            }
            else {

                setTimeout(() => {
                    firstCardChosen.classList.toggle("is-flipped");
                    secondCardChosen.classList.toggle("is-flipped");
                    randomCardDivRef.current.style.pointerEvents = 'auto';
                }, 1500);
            }
            setFirstCardChosen(null);
            setSecondCardChosen(null);
            setTotalCardsFlipped(0);
        }

    }, [firstCardChosen, secondCardChosen, totalCardsFlipped, totalCorrectCardsChosen, stopwatchStarted, props.randomString])

    function cardClickedHandler(cardRef) {

        var targetCard = cardRef.current;
        targetCard.classList.toggle("is-flipped");

        let cardsSelected = 0;
        setTotalCardsFlipped(prevTotal => {
            cardsSelected = prevTotal + 1;
            if (cardsSelected === 1)
                setFirstCardChosen(targetCard);
            else if (cardsSelected === 2)
                setSecondCardChosen(targetCard);
            return cardsSelected;
        });
    }


    return (

        <div>
            {
                showGameOverModal ? <Redirect to={{ pathname: '/gameOver', level: props.level, moves: moves, time: time }} /> :
                    <div>
                        <span className="movesAndTimeLabel">Moves : {moves} | Time :   <span>{formatTime(hours)}</span>:<span>{formatTime(minutes)}</span>:<span>{formatTime(seconds)}</span></span>
                        <div ref={randomCardDivRef} id="randomCardDiv">
                            {cardsArray}
                        </div>
                    </div>

            }

        </div>

    )
}
export default RandomCards;