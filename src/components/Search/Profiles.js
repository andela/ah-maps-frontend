import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { PROFILE_AVATAR } from '../../constants';

const Profiles = (props) => {
  const { items } = props;
  return (
    items.map(value => (
      <div className="search__dropdown_item" key={value.username}>
        <Link to={`/author/${value.username}`}>
          <Image src={value.image || PROFILE_AVATAR} avatar />
          <span>{value.username}</span>
        </Link>
      </div>
    ))
  );
};

export default Profiles;
