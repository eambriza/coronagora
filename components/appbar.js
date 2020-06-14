import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Raleway",
    marginLeft: theme.spacing(1),
  },
  appbarcolor: {
    color: "#487867",
    backgroundColor: "white",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.appbarcolor}>
          <Avatar alt="CoronAgora Logo" src="/coronagoraLogo.png" />

          <Typography variant="h6" className={classes.title}>
            CoronaAgora
          </Typography>

          <IconButton href="/" edge="start" color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
          <Button
            onClick={() => {
              alert("Estara Disponivel Brevemente");
            }}
          >
            NOTICIAS
          </Button>
          <Button
            onClick={() => {
              alert("Estara Disponivel Brevemente");
            }}
          >
            ESTATISTICAS
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
