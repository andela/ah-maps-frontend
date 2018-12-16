import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Signup/Message';

const ServerMessage = (props) => {
  const { articles } = props;
  return (
    <div>
      {articles.success
             && Object.keys(articles.errors).length > 0
              && <Message errors={articles.errors} status={articles.status} />
            }
      {!articles.success
                && Object.keys(articles.errors).length > 0
                  && <Message errors={articles.errors} status={articles.status} />
                }
    </div>
  );
};

ServerMessage.propTypes = {
  articles: PropTypes.shape({}).isRequired,
};

export default ServerMessage;
