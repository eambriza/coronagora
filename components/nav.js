import React from "react";
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
    height: "40vh",
    maxWidth: "800",
    display: "flex",
    resizeMode: "contain",
    marginTop: 55,
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
        <div className={classes.bannercontent}></div>
      </div>
    </div>
  );
}
