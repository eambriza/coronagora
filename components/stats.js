import React from "react";
import styles from "./layout.module.css";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontFamily: "Segoe UI Symbol",
    //background: "pink",
    /*  '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"', ****
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"', */
  },
  card: {
    display: "flex",
  },
});

export default function STATS(props) {
  const classes = useStyles(props);
  return (
    <Paper elevation={5}>
      <div className={styles.test1}>
        <Typography className={classes.root} variant="h1">
          Mocambique
        </Typography>
        <Typography className={classes.root} variant="h6">
          Ultimo Update: {props.day}
        </Typography>

        <div className={styles.test}>
          <Typography variant="h4">Activos</Typography>
          <Typography variant="h5">{props.active}</Typography>
          <Typography variant="h6">{props.activeT}% de todos casos.</Typography>
        </div>

        <div className={styles.test}>
          <Typography variant="h4">Recuperados</Typography>
          <Typography variant="h5">{props.recovered}</Typography>
          <Typography variant="h6">
            {props.recoveredT}% de todos casos.
          </Typography>
        </div>

        <div className={styles.test}>
          <Typography variant="h4">Mortes</Typography>
          <Typography variant="h5">{props.deaths}</Typography>
          <Typography variant="h6">{props.deathsT}% de todos casos.</Typography>
        </div>
      </div>
    </Paper>
  );
}
