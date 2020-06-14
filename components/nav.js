import Link from "next/link";
import React from "react";
//import styles from "./layout.module.css";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  buttonCoronagora: {
    fontFamily: "Raleway",
    fontSize: 34,
    left: 150,
    color: "#FFFFFF",
    marginTop: "400",
  },
  banner: {
    background: `url(/banner.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "center",
    backgroundRepeat: "no-repeat",
    height: "35vh",
    maxWidth: "800",
    display: "flex",
  },

  bannercontent: {
    padding: "120",
  },
});

export default function STATS(props) {
  const classes = useStyles(props);
  return (
    <div>
      <div className={classes.banner}>
        <div className={classes.bannercontent}>
          {/*  <Button href="/" className={classes.buttonCoronagora} size="large">
            coronAgora
          </Button> */}
        </div>
      </div>
    </div>
  );
}
