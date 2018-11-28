import LandingPage from '../views/Landingpage';

const routes = [
  {
    path: '/',
    name: 'Landing Page',
    component: LandingPage,
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
  },

];

export default routes;
