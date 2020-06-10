//import Link from "next/link";
import React from "react";
import styles from "./layout.module.css";

const FOOTER = (props) => (
  <footer className={styles.footer}>
    <div>
      <p className={styles.navlink}>
        <a href="#">Perguntas</a> &nbsp;|&nbsp; <a href="#">Sintomas</a>{" "}
        &nbsp;|&nbsp; <a href="#">Noticias</a> &nbsp;|&nbsp;{" "}
        <a href="#">Teste Online</a>
      </p>

      <p>Copyright &copy; 2020 | Designed By : EA , All rights reserved. </p>
    </div>
  </footer>
);

export default FOOTER;
