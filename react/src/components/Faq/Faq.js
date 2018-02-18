import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const styles = {
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '90%',
    maxWidth: '50em',
    margin: '0 auto',
  },
  cardHeader: {
    textAlign: 'left',
  },
  cardText: {
    textAlign: 'left',
    paddingTop: 0,
    paddingBottom: 0,
  },
};

const Faq = props => {
  const questions = props.faqs.filter((faq, idx) => {
    return faq.field.label === 'Question';
  });
  const answers = props.faqs.filter((faq, idx) => {
    return faq.field.label === 'Answer';
  });

  return (
    <div style={styles.container}>
      <h3>{props.title}</h3>
      {questions.map((question, idx) => (
        <Card style={styles.card} key={`question-${idx}`}>
          <CardHeader
            title={question.value}
            style={styles.cardHeader}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true} style={styles.cardHeader}>
            <Markdown source={answers[idx].value} />
          </CardText>
        </Card>
      ))}
    </div>
  );
};

Faq.propTypes = {
  title: PropTypes.string,
  faqs: PropTypes.array,
};

export default Faq;
