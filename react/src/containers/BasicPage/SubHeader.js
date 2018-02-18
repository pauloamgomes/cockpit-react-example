import React from 'react';
import PropTypes from 'prop-types';
import { lightBlack } from 'material-ui/styles/colors';

const SubHeader = props => {
  const styles = {
    container: {
      textAlign: 'center',
      paddingTop: 20,
    },
    title: {
      color: lightBlack,
      textTransform: 'uppercase',
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: 20,
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{props.title}</h2>
    </div>
  );
};

SubHeader.propTypes = {
  title: PropTypes.string,
  idx: PropTypes.number,
};

export default SubHeader;
