import LandingPage from '../views/Landingpage';
import Login from '../views/Login';

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
