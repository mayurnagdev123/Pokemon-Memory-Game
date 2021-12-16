import React, { useEffect, useState } from "react";
import './Card.css'

const ShowCards = (props) => {
    const [columns, setColumns] = useState([]);
    useEffect(() => {

        var dynamicRow = [];
        for (var i = 0; i < props.columns; i++) {
            if (props.columns <= 4)
                dynamicRow.push(<div key={`card${i}`} className="col-xs-4 col-sm-3 col-lg-2" style={{ padding: '0px' }}>{props.cardsArray[i]}</div>);
            else
                dynamicRow.push(<div key={`card${i}`} className="col-xs-3 col-sm-3" style={{ padding: '0px' }}>{props.cardsArray[i]}</div>);
        }
        if (i === props.columns)
            setColumns(dynamicRow);

    }, [props]);
    return (
        <div className="row card--row">

            {columns}



        </div>

    )
}
export default ShowCards;