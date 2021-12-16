import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {

    return (
        <div className="gameHeadingDiv">
            <h1 className="gameHeading">MEMORY <br />GAME</h1>
            <h3 className="gameLevelHeading">LEVEL</h3>
            <div className="levelDiv">
                <Link to={{ pathname: "/game", search: "?level=Easy" }} className="levelLink"> <button className="btn btn-lg levelNameBtn">Easy</button> </Link>
                <Link to={{ pathname: "/game", search: "?level=Medium" }} className="levelLink"><button className="btn btn-lg levelNameBtn">Medium</button></Link>
                <Link to={{ pathname: "/game", search: "?level=Hard" }} className="levelLink"><button className="btn btn-lg levelNameBtn">Hard</button></Link>
                <Link to={{ pathname: "/game", search: "?level=Very Hard" }} className="levelLink"><button className="btn btn-lg levelNameBtn">Very Hard</button></Link>
            </div>
        </div>
    )

}
export default Home;