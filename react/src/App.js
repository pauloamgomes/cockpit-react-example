import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './store';

import * as fetchPages from './modules/pages';

import { NavigationBar } from './components';
import { Main } from './containers';

class App extends Component {
  componentDidMount() {
    if (this.props.pages.length === 0) {
      this.props.fetchPages.fetchCollection();
    }
  }

  render() {
    const pages = this.props.pages;
    const links = [];

    pages.map(
      (entry, idx) =>
        entry.menu &&
        links.push({
          title: entry.title,
          content: entry.body,
          path: (idx === 0 && '/') || `/${entry.title_slug}`,
        })
    );

    return (
      <ConnectedRouter history={history}>
        <div className="App">
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <NavigationBar title="Cockpit React Example" links={links} />
              </Col>
            </Row>
            <Row>
              <Main pages={pages} />
            </Row>
          </Grid>
        </div>
      </ConnectedRouter>
    );
  }
}

App.propTypes = {
  fetchPages: PropTypes.object,
  pages: PropTypes.array,
};

App.defaultProps = {
  pages: [],
};

function mapStateToProps(state) {
  return {
    pages: (state && state.pages) || [],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPages: bindActionCreators(fetchPages, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
