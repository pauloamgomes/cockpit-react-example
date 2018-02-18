import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    margin: '0 auto',
  },
  iframe: {
    border: 0,
  },
};

const GoogleMap = props => {
  return (
    <div style={styles.container}>
      <iframe
        title="map"
        src={props.url}
        width="100%"
        height="450"
        frameBorder="0"
        style={styles.iframe}
        allowFullScreen
      />
    </div>
  );
};

GoogleMap.propTypes = {
  url: PropTypes.string,
};

export default GoogleMap;
