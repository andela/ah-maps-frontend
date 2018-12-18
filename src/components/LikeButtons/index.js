import React from 'react';
import '../../assets/styles/scss/index.sass';
import { isLoggedIn } from '../../utils';


const LikeBtn = ({ ...props }) => {
  const {
    likeCount, dislikeCount
  } = props;
  return (
      <div className="customContainer">
          <i className={isLoggedIn() ? "teal large thumbs up icon onclick-magnify" : "teal disabled large thumbs up icon onclick-magnify"} onClick={props.handleLike} />
        <a className="ui basic teal left pointing label">
          { likeCount }
        </a>
&nbsp;
        <i className={isLoggedIn() ? "teal large thumbs up icon onclick-magnify" : "teal disabled large thumbs down icon onclick-magnify"} onClick={props.handleDislike} />
        <a className="ui basic teal left pointing label">
          { dislikeCount }
        </a>
      </div>
  );
};

export default LikeBtn;
