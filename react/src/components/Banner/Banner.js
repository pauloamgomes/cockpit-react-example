import React from 'react';
import PropTypes from 'prop-types';
import { white } from 'material-ui/styles/colors';

import { getImageUrl } from '../../utils';

const styles = {
  container: {
    margin: 0,
    padding: 0,
    position: 'relative',
    marginLeft: -8,
    marginRight: -8,
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    width: '100wh',
    height: '70vh',
    textAlign: 'center',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    maxWidth: 500,
  },
  title: {
    lineHeight: 1,
    textRransform: 'uppercase',
    fontSize: '3em',
    marginBottom: 0,
  },
  heading: {
    fontSize: '1.5em',
    fontWeight: 'normal',
  },
};

const Banner = props => {
  const backgroundImage = `url(${getImageUrl(props.image.path)})`;
  const titleStyle = {
    color: (props.title && props.title.color) || white,
  };
  const headingStyle = {
    color: (props.heading && props.heading.color) || white,
  };
  return (
    <div style={styles.container}>
      <div style={{ ...styles.image, backgroundImage }}>
        <div style={styles.text}>
          {props.title &&
            props.title.text && (
              <h2 style={{ ...styles.title, ...titleStyle }}>
                {props.title.text}
              </h2>
            )}
          {props.heading &&
            props.heading.text && (
              <h3 style={{ ...styles.heading, ...headingStyle }}>
                {props.heading.text}
              </h3>
            )}
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.object,
  heading: PropTypes.object,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default Banner;
