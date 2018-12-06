import LandingPage from '../views/Landingpage';
import Login from '../views/Login';
import SignUp from '../views/SignUp';
import ForgotPassword from '../views/ForgotPassword';
import ResetPassword from '../views/ResetPassword';

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

  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },

  {
    path: '/reset-password/:token',
    name: 'ResetPassword',
    component: ResetPassword ,
  },

];

export default routes;
