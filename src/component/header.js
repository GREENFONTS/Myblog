import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import InfoIcon from "@material-ui/icons/Info";
import ContactsIcon from "@material-ui/icons/Contacts";
import CastForEducationSharpIcon from "@material-ui/icons/CastForEducationSharp";
import CodeSharpIcon from "@material-ui/icons/CodeSharp";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import HomeIcon from "@material-ui/icons/Home";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  ListItemIcons: {
    marginRight: 13,
  },
  TopDrawer: {
    display: "inline-block",
  },
  headerName: {
    fontSize: "1.1rem",
    marginRight: 20,
    fontWeight: 650,
  },
  Icons: {
    display: "inline-flex",
    margin: '0px'
  },
  AppBar: {
    margin: 0,
    padding: 0,
    width: "100%"
  }
});

const Header = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => {
    return (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === "top" || anchor === "bottom",
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem>
            <Avatar
              alt="GreenLeaf"
              src="/assets/images/green logo.jpg"
              className="mr-2"
            />
            <ListItemText >GREENFONTSMEDIA</ListItemText>
          </ListItem>
          <Divider />
          <Link href="/">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>HOME</ListItemText>
            </ListItem>
          </Link>
          <Link href="/aboutus">
            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText>ABOUT</ListItemText>
            </ListItem>
          </Link>
          <Link href="/contactus">
            <ListItem button>
              <ListItemIcon>
                <ContactsIcon />
              </ListItemIcon>
              <ListItemText>CONTACT</ListItemText>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link href="/category/Education">
            <ListItem button>
              <ListItemIcon>
                <CastForEducationSharpIcon />
              </ListItemIcon>
              <ListItemText>EDUCATION</ListItemText>
            </ListItem>
          </Link>
          <Link href="/category/Programming">
            <ListItem button>
              <ListItemIcon>
                <CodeSharpIcon />
              </ListItemIcon>
              <ListItemText>PROGRAMMING</ListItemText>
            </ListItem>
          </Link>
          <Link href="/category/motivation">
            <ListItem button>
              <ListItemIcon>
                <SentimentSatisfiedIcon />
              </ListItemIcon>
              <ListItemText>MOTIVATIONAL</ListItemText>
            </ListItem>
          </Link>
        </List>
      </div>
    );
  };

  return (
    <AppBar position="static" color="primary" className="container-fluid">
      <Toolbar>
        <Typography className={classes.headerName}>GREENFONTSMEDIA </Typography>

        <List className={classes.Icons}>
          <Link href="https:www.facebook.com" target="_blank">
            <ListItemIcon className="text-light icon">
              <FacebookIcon />
            </ListItemIcon>
          </Link>
          <Link href="https:www.github.com/GREENFONTS" target="_blank">
            <ListItemIcon className="text-light icon">
              <GitHubIcon />
            </ListItemIcon>
          </Link>
          <Link href="https:www.linkedIn.com" target="_blank">
            <ListItemIcon className="text-light icon">
              <LinkedInIcon />
            </ListItemIcon>
          </Link>
        </List>
      </Toolbar>
      <Toolbar className="navbar navbar-expand-lg">
        <div>
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                edge="end"
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                // data-target="#navbarNavDropdown"
                // aria-controls="navbarNavDropdown"
                aria-expanded="false"
                // aria-label="Toggle navigation"
                color="inherit"
                onClick={toggleDrawer(anchor, true)}
              >
                <MenuIcon className="mr-2" /> MENU
              </IconButton>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <Link href="/" className="link">
                  <ListItem button className="text-light">
                    <HomeIcon className="mr-1" />
                    <ListItemText>HOME</ListItemText>
                  </ListItem>
                </Link>
                <Link href="/aboutus" className="link">
                  <ListItem button className="text-light">
                    <InfoIcon className="mr-2" />
                    <ListItemText>ABOUT</ListItemText>
                  </ListItem>
                </Link>
                <Link href="/contactus">
                  <ListItem button className="text-light">
                    <ContactsIcon className="mr-2" />
                    <ListItemText>CONTACT</ListItemText>
                  </ListItem>
                </Link>
                <Link href="/category/Programming">
                  <ListItem button className="text-light">
                    <CodeSharpIcon className="mr-2" />
                    <ListItemText>PROGRAMMING</ListItemText>
                  </ListItem>
                </Link>
                <Link href="/category/Education">
                  <ListItem button className="text-light">
                    <CastForEducationSharpIcon className="mr-2" />
                    <ListItemText>EDUCATION</ListItemText>
                  </ListItem>
                </Link>
                <Link href="/category/motivation">
                  <ListItem button className="text-light">
                    <SentimentSatisfiedIcon className="mr-2" />
                    <ListItemText>MOTIVATIONAL</ListItemText>
                  </ListItem>
                </Link>
              </div>

              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
