import React, { FC } from 'react';
import './App.css';
import { Switch, Route } from 'react-router';

import Calendar from './containers/top/index';

const App: FC<{}> = () => (
  <div className="l-main">
    <div className="l-main__inner">
      <Switch>
        <Route path="/:date" component={Calendar} />
      </Switch>
    </div>
  </div>
);

export default App;
