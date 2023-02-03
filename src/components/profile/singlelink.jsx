import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Post from "./postEvent";
import Favorite from './favoriteBlank';
import Setting from './setting';

function singlelink() {
  return (
    <div>
        <Switch>
            <Route path="/profile/1" component={Post} />
            <Route path="/profile/2" component={Favorite} />
            <Route path="/profile/3" component={Setting} />
        </Switch>

    </div>
  )
}

export default singlelink