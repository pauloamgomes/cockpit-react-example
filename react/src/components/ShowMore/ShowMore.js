import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import RaisedButton from 'material-ui/RaisedButton';
import { lightBlue700, white, lightBlack } from 'material-ui/styles/colors';

const styles = {
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '90%',
    maxWidth: '50em',
    margin: '0 auto',
  },
  text: {
    textAlign: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    color: lightBlack,
  },
};

class ShowMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleClick = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.text}>
          <Markdown source={this.props.summary} />
        </div>
        <RaisedButton
          label={this.state.expanded ? 'Show Less' : 'Show More'}
          primary
          onClick={this.handleClick}
          buttonStyle={{ backgroundColor: lightBlue700 }}
          labelStyle={{ color: white }}
        />
        {this.state.expanded && (
          <div style={styles.text}>
            <Markdown source={this.props.contents} />
          </div>
        )}
      </div>
    );
  }
}

ShowMore.propTypes = {
  summary: PropTypes.string,
  contents: PropTypes.string,
};

export default ShowMore;
