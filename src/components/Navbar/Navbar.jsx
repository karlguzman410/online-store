import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";
import storeLogo from "../../assets/storeLogo.jpg";
import useStyles from "./styles";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const location = useLocation();
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={storeLogo}
              alt="Karl's Online Store"
              height="25px"
              className={classes.image}
            />
            Karl's Online Store
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" ? (
            <div className={classes.button}>
              <Link to="/cart"></Link>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show Cart Icons"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
