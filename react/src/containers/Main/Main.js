import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Route, Switch } from 'react-router-dom';

import { BasicPage, PageNotFound } from '../';

const Main = props => {
  return (
    <Col xs={12}>
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <main>
              <Switch>
                {props.pages.map((entry, idx) => (
                  <Route
                    exact
                    path={(idx === 0 && '/') || `/${entry.title_slug}`}
                    key={idx}
                    render={props => <BasicPage idx={idx} data={entry} />}
                  />
                ))}
                <Route exact component={PageNotFound} />
              </Switch>
            </main>
          </Col>
        </Row>
      </Grid>
    </Col>
  );
};

Main.propTypes = {
  pages: PropTypes.array,
};

export default Main;
