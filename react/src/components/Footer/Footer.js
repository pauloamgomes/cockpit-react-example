import React from 'react';
import PropTypes from 'prop-types';
import { white } from 'material-ui/styles/colors';

const styles = {
  footer: {
    backgroundColor: white,
  },
};

const Footer = props => {
  return <footer style={styles.footer} />;
};

Footer.propTypes = {
  data: PropTypes.object,
};

export default Footer;
