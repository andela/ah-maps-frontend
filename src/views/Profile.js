import React from 'react';
import TemplateWithMenu from './Templates/TemplateWithMenu';
import ProfileComponent from '../containers/Profile';

const Profile = ({ ...props }) => (
  <TemplateWithMenu>
    <ProfileComponent {...props} />
  </TemplateWithMenu>
);

export default Profile;
