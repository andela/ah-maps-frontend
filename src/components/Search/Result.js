import React from 'react';
import PropTypes from 'prop-types';
import { Container, Divider } from 'semantic-ui-react';

const Result = (props) => {
  const { searchKey, searchValue } = props;
  return (
    <Container>
      <Divider horizontal className="text-muted">
 result for
        {' '}
        {searchKey}
        {' '}
:
        {' '}
        <span className="text-black">
&#39;
          {searchValue}
&#39;
        </span>
      </Divider>
    </Container>

  );
};

Result.propTypes = {
  searchKey: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default Result;
