import React from "react";
import styles from "./layout.module.css";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

/// Card
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
///

//// Menu button

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
//// Menu button

const useStyles = makeStyles({
  root: {
    fontFamily: "Raleway",
  },
  card: {
    display: "inline-block",
    margin: 20,
  },
  cardtitle: {
    marginBottom: 12,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Raleway",
  },
  cardtext: {
    fontSize: 14,
    fontFamily: "Raleway",
  },
  cardnumbers: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Raleway",
  },
  cardred: {
    color: "#fc7e7e",
  },
  cardblue: {
    color: "#7fb9dc",
  },
  cardgreen: {
    color: "#1abe81",
  },
  button: {
    fontFamily: "Raleway", //"Segoe UI Symbol",
    fontSize: 90,
    color: "#487867",
    textTransform: "none",
  },
});

export default function STATS(props) {
  /// Menu button
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  /// Menu button
  const classes = useStyles(props);
  return (
    <Paper elevation={5}>
      <div className={styles.test1}>
        <Button
          className={classes.button}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Mocambique
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Mocambique</MenuItem>
          <MenuItem onClick={handleClose}>Angola</MenuItem>
          <MenuItem onClick={handleClose}>Portugal</MenuItem>
          <MenuItem onClick={handleClose}>Brasil</MenuItem>
        </Menu>

        {/*     <Typography className={classes.root} variant="h1">
          Mocambique
        </Typography> */}
        <Typography className={classes.root} variant="h6">
          Ultimo Update: {props.day}
        </Typography>

        <div>
          <Card className={classes.card} elevation={7}>
            <CardContent>
              <Typography className={classes.cardtitle}>Todos Casos</Typography>
              <Typography className={classes.cardnumbers}>
                {props.total}
              </Typography>
              <Typography className={classes.cardtext}>.</Typography>
            </CardContent>
          </Card>
          <Card className={classes.card} elevation={7}>
            <CardContent className={classes.cardblue}>
              <Typography className={classes.cardtitle}>Activos</Typography>
              <Typography className={classes.cardnumbers}>
                {props.active}
              </Typography>
              <Typography className={classes.cardtext}>
                {props.activeT}% de todos casos.
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card} elevation={7}>
            <CardContent className={classes.cardgreen}>
              <Typography className={classes.cardtitle}>Recuperados</Typography>
              <Typography className={classes.cardnumbers}>
                {props.recovered}
              </Typography>
              <Typography className={classes.cardtext}>
                {props.recoveredT}% de todos casos.
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card} elevation={7}>
            <CardContent className={classes.cardred}>
              <Typography className={classes.cardtitle}>Mortes</Typography>
              <Typography className={classes.cardnumbers}>
                {props.deaths}
              </Typography>
              <Typography className={classes.cardtext}>
                {props.deathsT}% de todos casos.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </Paper>
  );
}
