//import Link from "next/link";
import React from "react";
import styles from "./layout.module.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
//import Alert from "@material-ui/lab/Alert";

const FOOTER = (props) => (
  <Paper elevation={1}>
    <footer className={styles.footer}>
      <div>
        <Typography variant="subtitle2">
          <a href="/covid19">O que é COVID-19?</a> &nbsp;|&nbsp;
          <a
            onClick={() => {
              alert("Estara Disponivel Brevemente");
            }}
            href="#"
          >
            Perguntas Frequentes
          </a>{" "}
          &nbsp;|&nbsp;
          <a
            onClick={() => {
              alert("Estara Disponivel Brevemente");
            }}
            href="#"
          >
            Noticias
          </a>{" "}
          &nbsp;|&nbsp;{" "}
          <a href="https://riscocovid19.misau.gov.mz/">Teste Online</a>
        </Typography>
        <Typography variant="body2">
          Copyright &copy; 2020 | Designed By : EA , All rights reserved.{" "}
        </Typography>
      </div>
    </footer>
  </Paper>
);

export default FOOTER;

//<Button onClick={() => { alert('clicked') }}>Click me</Button>

/* 
<Typography variant="subtitle2">
<a href="#">Perguntas</a> &nbsp;|&nbsp; <a href="#">Sintomas</a>{" "}
&nbsp;|&nbsp; <a href="#">Noticias</a> &nbsp;|&nbsp;{" "}
<a href="#">Teste Online</a>
</Typography> */
