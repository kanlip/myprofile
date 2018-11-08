import React, { Component,Fragment } from 'react';
import Link from 'next/link'
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Close from "@material-ui/icons/Close";
import ListItemText from "@material-ui/core/ListItemText";
import { routes } from "../routes";

const styles = {
  list: {
    width: "500px"
  },
  root: {
    flexGrow: 1
  },
  typo: {
    fontWeight: "500",
    color: "#505050",
    letterSpacing: "2px"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    transition: "0.3ms"
  }
};



class Navbar extends Component{
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false
    };
    this.toggle = this.toggle.bind(this);
  }

  renderRoutes() {
    const { links } = routes;
    const link = links.map(route => {
      return (
        <Link key={route.text} href={route.link}>
          <a>{route.text}</a>
        </Link>
      );
    });
    return link;
  }
  renderListNav() {
    const { links } = routes;
    const link = links.map(route => {
      return (
        <ListItem
          
          divider
          button
          key={route.text}
        >
          <ListItemText disableTypography><Link href={route.link}><a>{route.text}</a></Link></ListItemText>
        </ListItem>
      );
    });
    return link;
  }


  toggle() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render(){
    const { classes } = this.props;
    return(
      <React.Fragment>
        <div className={`${classes.root} nav`} >
        <AppBar
            color="default"
            style={{ backgroundColor: "transparent", boxShadow: "none" }}
            position="static"
          >
            <Toolbar>
              <div className={classes.grow}>
                <Typography
                  variant="h2"
                  color="inherit"
                  className={classes.typo}
                >
                  Sukphasuth Lipipan
                </Typography>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.typo}
                >
                  Web developer
                </Typography>
              </div>

              <Hidden smDown>
                <div>{this.renderRoutes()}</div>
              </Hidden>
              <Hidden mdUp>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                  onClick={this.toggle}
                >
                  {this.state.isOpened === false ? <MenuIcon /> : <Close />}
                </IconButton>
              </Hidden>
            </Toolbar>
          </AppBar>
        </div>
        <Hidden mdUp>
          <Drawer open={this.state.isOpened} onClose={this.toggle}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggle}
              onKeyDown={this.toggle}
            >
              <List>{this.renderListNav()}</List>
            </div>
          </Drawer>
        </Hidden>
      </React.Fragment>
    )
  }
}
export default withStyles(styles)(Navbar);