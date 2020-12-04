import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import Box from '@material-ui/core/Box';


const NavBar = () => {
  return (

    <Box component="span" m={10}>
        This is the top nav!
      <RouterNavLink
        href="#"
        tag={RouterNavLink}
        to="/"
        exact
        activeClassName="router-link-exact-active"
      >
        Home
      </RouterNavLink>
      <RouterNavLink
        href="#"
        tag={RouterNavLink}
        to="/random"
        exact
        activeClassName="router-link-exact-active"
      >
        Random Hobby
      </RouterNavLink>
    </Box>
  );
};

export default NavBar;
