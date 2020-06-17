import { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./layout.module.css";

const useStyles = makeStyles({
  root: {
    fontFamily: "Raleway",
    marginBottom: 15,
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
    fontFamily: "Raleway",
    padding: 8,
    fontSize: "45px",
    color: "#487867",
    marginTop: "30px",
    marginBottom: "30px",
    textTransform: "none",
  },
});

export default function STATS(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCountryChange = (country) => {
    props.getCountryDetails(country);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles(props);
  return (
    <Paper variant="outlined" elevation={8}>
      <div className={styles.test1}>
        <Button
          className={classes.button}
          variant="outlined"
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          {props.country[1]}
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => handleCountryChange(["Mozambique", "Moçambique"])}
          >
            Moçambique
          </MenuItem>
          <MenuItem onClick={() => handleCountryChange(["Angola", "Angola"])}>
            Angola
          </MenuItem>
          <MenuItem
            onClick={() => handleCountryChange(["Portugal", "Portugal"])}
          >
            Portugal
          </MenuItem>
          <MenuItem onClick={() => handleCountryChange(["Brazil", "Brasil"])}>
            Brasil
          </MenuItem>
        </Menu>
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
