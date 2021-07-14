import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card';
import data from './data.json';
import { url } from './api';
import styles from './app.module.css';
import { InputLabel, Select, MenuItem } from '@material-ui/core';
const App = () => {
  const [exchange, setexchange] = useState(0);
  const [display, setdisplay] = useState('$');
  useEffect(() => {
    axios.get(url).then(res => {
      setexchange(res.data.rates.INR);
      console.log(res.data.rates.INR);
    });
    // console.log(cost.data.rates.INR)
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <p>Currency</p>
        <select
          name="gender"
          className={styles.select}
          onChange={e => setdisplay(e.target.value)}
        >
          <option className={styles.dropdown} value="$">
            USD
          </option>
          <option className={styles.dropdown} value="Rs.">
            INR
          </option>
        </select>
      </div>
      <div className={styles.wrapper}>
        {data.products.map((item, index) => {
          return (
            <Card
              key={index}
              data={item}
              rate={exchange.toFixed(3)}
              display={display}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
// <label htmlFor="currency">currency</label>
// <select name="currency" className={styles.dropdown} onChange={(e) => setdisplay(e.target.value)}>

// //         </select>
