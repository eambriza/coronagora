import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Avatar from "@material-ui/core/Avatar";
import Link from "next/link";
import Button from "@material-ui/core/Button";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Raleway",
    marginLeft: theme.spacing(1),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  appbarcolor: {
    color: "#487867",
    backgroundColor: "white",
  },

  button: {
    fontFamily: "Raleway",
    //padding: 8,
    fontSize: "20px",
    color: "#487867",
    //marginTop: "20px",
    //marginBottom: "20px",
    textTransform: "none",
  },

  buttonDrawer: {
    fontFamily: "Raleway",
    //padding: 8,
    fontSize: "15px",
    color: "#487867",
    //marginTop: "20px",
    //marginBottom: "20px",
    textTransform: "none",
  },
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        elevation={1}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.appbarcolor}>
          <Avatar alt="CoronAgora Logo" src="/coronagoraLogo.jpg" />
          <Typography variant="h6" noWrap className={classes.title}>
            <Button className={classes.button} href="/">
              CoronAgora
            </Button>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        elevation={1}
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="O que é COVID-19? ">
            <Button className={classes.buttonDrawer} href="/covid19">
              O que é COVID-19?
            </Button>
          </ListItem>
          <Divider />
          <ListItem
            className={classes.buttonDrawer}
            button
            key="Perguntas Frequentes "
            onClick={() => {
              alert("Estara Disponivel Brevemente");
            }}
          >
            Perguntas Frequentes
          </ListItem>
          <ListItem
            className={classes.buttonDrawer}
            button
            key="Noticias"
            onClick={() => {
              alert("Estara Disponivel Brevemente");
            }}
          >
            Noticias
          </ListItem>

          <Divider />
          <ListItem button key="O que é COVID-19? ">
            <Button
              className={classes.buttonDrawer}
              href="https://riscocovid19.misau.gov.mz/"
            >
              Teste Online
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
