import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Design from '../Design';
import Develop from '../Develop';
import Arts from '../Arts';
import Wandr from '../Wandr';
import PWP from '../PWP';
import SelfService from '../SelfService';
import IDEA from '../IDEA';

import Header from '../../components/Header';
import styles from './styles.css';

const App = () => {
  return (
    <BrowserRouter>
    <div className={styles.app}>
      <Header />
      <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/design" component={Design}/>
             <Route path="/develop" component={Develop}/>
             <Route path="/arts" component={Arts}/>
             <Route path="/wandr" component={Wandr}/>
             <Route path="/pwp" component={PWP}/>
             <Route path="/selfservice" component={SelfService}/>
             <Route path="/idea" component={IDEA}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
};

export default App;
