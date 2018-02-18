import React from 'react';
import Drawer from 'material-ui/Drawer';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import { NavLink } from 'react-router-dom';
import { lightBlue500, white, lightWhite } from 'material-ui/styles/colors';

const styles = {
  sidebar: {
    backgroundColor: lightBlue500,
    paddingTop: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: '1.1em',
    fontWeight: 600,
    color: white,
    paddingBottom: 20,
  },
  menuItem: {
    borderBottomColor: lightWhite,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  link: {
    default: {
      padding: '5px 10px',
      textTransform: 'uppercase',
      fontSize: 14,
      textDecoration: 'none',
      color: white,
    },
    active: {
      color: white,
    },
  },
};

const Sidebar = props => {
  return (
    <Drawer
      docked={false}
      width={230}
      open={props.open}
      onRequestChange={open => props.onRequestChange({ open })}
      className="sidebar"
      containerStyle={styles.sidebar}
    >
      <h3 style={styles.title}>Cockpit React Example</h3>
      {props.links.map((link, index) => (
        <MenuItem
          style={
            index === props.links.length - 1
              ? styles.lastMenuItem
              : styles.menuItem
          }
          key={`sidebar-${index}`}
          onClick={open => props.onRequestChange({ open })}
        >
          <NavLink
            exact
            to={link.path}
            key={`nav-${index}`}
            style={styles.link.default}
          >
            {link.title}
          </NavLink>
        </MenuItem>
      ))}
    </Drawer>
  );
};

Sidebar.propTypes = {
  links: PropTypes.array,
  onRequestChange: PropTypes.func,
  open: PropTypes.bool,
};

export default Sidebar;
