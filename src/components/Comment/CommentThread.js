import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import CommentsThreadCard from '../../containers/Comment/CommentThreadCard';


const CommentsThread = ({ ...props }) => {
  const { thread, refresh } = props;
  return (
    <div>
      <Card>
        <React.Fragment>
          {thread.map(threadcomment => (

            <CommentsThreadCard
              body={threadcomment.body}
              author={threadcomment.author}
              image={threadcomment.author.image}
              dislikes={threadcomment.dislike_count}
              likes={threadcomment.likes_count}
              date={threadcomment.history[0].created_at}
              id={threadcomment.id}
              refresh={refresh}
            />

          ))
          }
        </React.Fragment>

      </Card>
    </div>
  );
};

CommentsThread.propTypes = {
  thread: PropTypes.arrayOf.isRequired,
  refresh: PropTypes.func.isRequired,
};


export default CommentsThread;
