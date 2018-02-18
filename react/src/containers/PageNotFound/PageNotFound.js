import React from 'react';
import SimpleBlock from '../../components/SimpleBlock';

const text = `
We can't seem to find the page you're looking for.

Please check the url or return to the homepage.
`;

const PageNotFound = props => {
  return (
    <div>
      <SimpleBlock headline="404 Page Not Found!" content={text} />
    </div>
  );
};

export default PageNotFound;
