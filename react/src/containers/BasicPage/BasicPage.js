import React from 'react';
import PropTypes from 'prop-types';
import SubHeader from './SubHeader';
import Components from './Components';

const BasicPage = props => {
  return (
    <div>
      {props.data.subheading && (
        <SubHeader title={props.data.title} idx={props.data.idx} />
      )}
      <div>
        <div className="components">
          <Components components={props.data.components} />
        </div>
      </div>
    </div>
  );
};

BasicPage.propTypes = {
  idx: PropTypes.number,
  data: PropTypes.object,
};

export default BasicPage;
