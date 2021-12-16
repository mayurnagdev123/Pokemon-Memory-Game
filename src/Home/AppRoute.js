import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Game from '../Game/Game';
import GameOver from '../Game/GameOver';
import Home from './Home';
const AppRoute = () => {

    return (
        <div>
            <Switch>
                <Route path="/game" component={Game} />
                <Route path="/gameOver" component={GameOver} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    )

}
export default AppRoute;