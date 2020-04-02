import React from 'react';

import Home from '../Home';

import Header from '../../components/Header';
import styles from './styles.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Home />
    </div>
  );
};

export default App;
