import React, { useEffect } from 'react'
import Backdrop from '../Backdrop/Backdrop';
import Modal from '../Modal/Modal';
const GameOver = (props) => {
    useEffect(() => {

        if (props.location.level === undefined) {
            props.history.replace("/")
        }


    }, [props])
    return (

        <Backdrop>
            <Modal moves={props?.location?.moves} level={props?.location?.level} time={props?.location?.time} />
        </Backdrop>

    )

}
export default GameOver;