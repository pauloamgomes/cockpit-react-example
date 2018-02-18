import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { lightBlack, lightBlue50 } from 'material-ui/styles/colors';

import { getImageUrl } from '../../utils';

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
  picture: {
    width: '100%',
    maxHeight: 120,
  },
  col: {
    padding: 0,
    margin: 0,
  },
  colContainer: {
    backgroundColor: lightBlue50,
    marginRight: 10,
    marginLeft: 10,
    padding: 20,
    height: '100%',
  },
  colTitle: {
    fontSize: '1em',
    minHeight: 55,
  },
};

const ColumnsBlock = props => {
  const cols = [];
  props.column1 && props.column1.text && cols.push(props.column1);
  props.column2 && props.column2.text && cols.push(props.column2);
  props.column3 && props.column3.text && cols.push(props.column3);
  const colMd = cols.length === 3 ? 4 : cols.length === 2 ? 6 : 12;

  return (
    <div style={styles.container}>
      <Grid>
        <Row>
          {cols.map((col, idx) => (
            <Col style={styles.col} xs={12} md={colMd} key={`col-${idx}`}>
              <div style={styles.colContainer}>
                <div>
                  <img
                    style={styles.picture}
                    alt={col.title}
                    src={getImageUrl(col.picture.path)}
                  />
                </div>
                <h3 style={styles.colTitle}>{col.title}</h3>
                <Markdown source={col.text} />
              </div>
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  );
};

ColumnsBlock.propTypes = {
  column1: PropTypes.object,
  column2: PropTypes.object,
  column3: PropTypes.object,
};

export default ColumnsBlock;
