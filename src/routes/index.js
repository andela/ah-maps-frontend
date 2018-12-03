import LandingPage from '../views/Landingpage';
import Login from '../views/Login';
import SignUp from '../views/SignUp';

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
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp,
  },

];

export default routes;
