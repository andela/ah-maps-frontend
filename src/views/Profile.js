import React from 'react';
import TemplateWithMenu from './Templates/TemplateWithMenu';
import ProfileComponent from '../containers/Profile';

const Profile = () => (
  <TemplateWithMenu>
    <ProfileComponent />
  </TemplateWithMenu>
);

export default Profile;
