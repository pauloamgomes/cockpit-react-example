import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import { lightBlack } from 'material-ui/styles/colors';

const styles = {
  container: {
    paddingTop: 20,
    marginBottom: 30,
    paddingBottom: 20,
    width: '90%',
    maxWidth: '50em',
    margin: '0 auto',
    color: lightBlack,
  },
};

const TextBlock = props => {
  return (
    <div style={styles.container}>
      <Markdown source={props.contents} />
    </div>
  );
};

TextBlock.propTypes = {
  contents: PropTypes.string,
};

export default TextBlock;
