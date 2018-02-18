import React, { Component } from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import { white, lightBlue300, lightBlue700 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';

import Sidebar from './Sidebar';
import './NavigationBar.css';

const styles = {
  toolbar: {
    backgroundColor: white,
    height: 80,
    margin: 0,
    padding: '10px 0',
    color: lightBlue700,
    zIndex: 9,
    width: '100%',
    fontSize: 14,
  },
  toolbarLinks: {
    float: 'left',
    textAlign: 'left',
    marginLeft: 'auto',
    marginRight: 20,
  },
  hamburger: {
    color: lightBlue700,
  },
  logo: {
    marginLeft: 20,
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: 600,
    textDecoration: 'none',
    color: lightBlue700,
  },
  link: {
    default: {
      padding: '5px 2px',
      marginLeft: 25,
      textTransform: 'uppercase',
      fontSize: 13,
      textDecoration: 'none',
      color: lightBlue700,
    },
    active: {
      color: lightBlue700,
      borderColor: lightBlue700,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
    },
  },
};

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSidebar: false,
    };
  }

  showSidebar = () => {
    this.setState({ showSidebar: true });
  };

  handleSidebarChange = () => {
    this.setState({
      showSidebar: !this.state.showSidebar,
    });
  };

  render() {
    return (
      <div>
        <Sidebar
          links={this.props.links}
          open={this.state.showSidebar}
          onRequestChange={this.handleSidebarChange}
        />
        <Toolbar style={styles.toolbar}>
          <ToolbarGroup style={styles.hamburger}>
            <IconButton onClick={this.handleSidebarChange}>
              <NavigationMenu color={lightBlue700} hoverColor={lightBlue300} />
            </IconButton>
          </ToolbarGroup>
          <ToolbarGroup>
            <NavLink style={styles.logo} exact to="/">
              {this.props.title}
            </NavLink>
          </ToolbarGroup>
          <ToolbarGroup style={styles.toolbarLinks} className="main-menu">
            {this.props.links.map((link, index) => (
              <NavLink
                exact
                to={link.path}
                key={`nav-${index}`}
                activeStyle={styles.link.active}
                style={styles.link.default}
              >
                {link.title}
              </NavLink>
            ))}
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

NavigationBar.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
};

export default NavigationBar;
