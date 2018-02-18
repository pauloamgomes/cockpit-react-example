import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import { white, lightWhite } from 'material-ui/styles/colors';

const styles = {
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '90%',
    maxWidth: '50em',
    margin: '0 auto',
  },
  quote: {
    paddingTop: '-100px',
  },
  mark: {
    marginTop: '-10px',
    fontWeight: 800,
    fontSize: '100px',
    color: white,
    fontFamily: '"Times New Roman", Georgia, Serif',
  },
  text: {
    fontSize: 20,
    marginTop: '-60px',
  },
  action: {
    borderTopStyle: 'solid',
    borderTopColor: lightWhite,
    borderTopWidth: 1,
    paddingTop: 20,
    marginTop: 10,
  },
};

const Quote = props => {
  return (
    <div style={styles.container}>
      <blockquote style={styles.quote}>
        <div style={styles.mark}>“</div>
        <div style={styles.text}>
          <Markdown source={props.content} />
        </div>
        <div style={styles.action}>
          <div style={styles.author}>{props.author}</div>
        </div>
      </blockquote>
    </div>
  );
};

Quote.propTypes = {
  content: PropTypes.string,
  author: PropTypes.string,
  variant: PropTypes.string,
};

export default Quote;
