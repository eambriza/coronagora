import Link from "next/link";
import React from "react";
import styles from "./layout.module.css";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontFamily: "Segoe UI",
    fontSize: 34,
    left: 150,
    //padding: 100,
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
});

export default function STATS(props) {
  const classes = useStyles(props);
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.container}>
          <div className={styles.bannercontent}>
            <Button
              href="/"
              className={classes.root}
              color="primary"
              size="large"
            >
              coronAgora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
