import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { lightBlue700, white } from 'material-ui/styles/colors';

import { getImageUrl } from '../../utils';

const styles = {
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '90%',
    maxWidth: '50em',
    margin: '0 auto',
  },
  content: {
    marginBottom: 30,
  },
  buttonDarken: {
    backgroundColor: white,
  },
  buttonLighten: {
    backgroundColor: lightBlue700,
  },
  picture: {
    maxWidth: '75%',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const SimpleBlock = props => {
  const buttonBgColor = props.variant === 'Darken' ? white : lightBlue700;
  const buttonFgColor = props.variant === 'Darken' ? lightBlue700 : white;

  const contents = (
    <div>
      <h2>{props.headline}</h2>
      <div style={styles.content}>
        <Markdown source={props.content} />
      </div>
      {props.cta &&
        props.cta.link &&
        props.cta.text && (
          <a
            href={props.cta.link}
            target={props.cta._blank ? '_blank' : '_self'}
          >
            <RaisedButton
              label={props.cta.text}
              primary
              buttonStyle={{ backgroundColor: buttonBgColor }}
              labelStyle={{ color: buttonFgColor }}
            />
          </a>
        )}
    </div>
  );

  const picture = (
    <div>
      {props.picture && (
        <img
          style={styles.picture}
          src={getImageUrl(props.picture.path)}
          alt={props.picture.title}
        />
      )}
    </div>
  );

  return (
    <div style={styles.container}>
      <Grid>
        {props.float === 'None' && (
          <Row>
            <Col xs={12} md={12}>
              {picture}
              {contents}
            </Col>
          </Row>
        )}
        {props.float === 'Left' && (
          <Row style={styles.row}>
            <Col xs={12} md={6}>
              {picture}
            </Col>
            <Col xs={12} md={6}>
              {contents}
            </Col>
          </Row>
        )}
        {props.float === 'Right' && (
          <Row style={styles.row}>
            <Col xs={12} md={6}>
              {contents}
            </Col>
            <Col xs={12} md={6}>
              {picture}
            </Col>
          </Row>
        )}
      </Grid>
    </div>
  );
};

SimpleBlock.propTypes = {
  headline: PropTypes.string,
  content: PropTypes.string,
  variant: PropTypes.string,
  picture: PropTypes.object,
  float: PropTypes.string,
  cta: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

SimpleBlock.defaultProps = {
  float: 'None',
};

export default SimpleBlock;
