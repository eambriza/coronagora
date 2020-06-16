//import Link from "next/link";
import React from "react";
import styles from "./layout.module.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
//import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Raleway",
  },
  footer: {
    padding: 15,
    /*  background: #eee; */
    background: "#1abe81",
    textAlign: "center",
  },
}));

export default function FOOTER(props) {
  const classes = useStyles(props);
  return (
    <Paper elevation={7}>
      <footer className={classes.footer}>
        <Typography className={classes.root} variant="subtitle2">
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
        <Typography className={classes.root} variant="body2">
          Copyright &copy; 2020 | Designed By : EA , All rights reserved.{" "}
        </Typography>
      </footer>
    </Paper>
  );
}
//export default FOOTER;

//<Button onClick={() => { alert('clicked') }}>Click me</Button>

/* 
<Typography variant="subtitle2">
<a href="#">Perguntas</a> &nbsp;|&nbsp; <a href="#">Sintomas</a>{" "}
&nbsp;|&nbsp; <a href="#">Noticias</a> &nbsp;|&nbsp;{" "}
<a href="#">Teste Online</a>
</Typography> */
