import React from "react";
import styles from "./layout.module.css";

const STATS = (props) => (
  <div className={styles.test1}>
    <h1>Mocambique</h1>
    <p>Ultimo Update: {props.day}</p>
    <div className={styles.test}>
      <h2>Activos</h2>
      <h3>{props.active}</h3>
      <p>{props.activeT}% de todos casos.</p>
    </div>

    <div className={styles.test}>
      <h2>Recuperados</h2>
      <h3>{props.recovered}</h3>
      <p>{props.recoveredT}% de todos casos.</p>
    </div>

    <div className={styles.test}>
      <h2>Mortes</h2>
      <h3>{props.deaths}</h3>
      <p>{props.deathsT}% de todos casos.</p>
    </div>
  </div>
);

export default STATS;
