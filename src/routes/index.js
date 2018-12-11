import LandingPage from '../views/Landingpage';
import Login from '../views/Login';
import SignUp from '../views/SignUp';
import ForgotPassword from '../views/ForgotPassword';
import ResetPassword from '../views/ResetPassword';
import PageNotFound from '../components/PageNotFound';
import Article from '../views/Article';
/**
 * Routing details
 * path: string: url path
 * name: string: name of the path
 * protected: bool: checks if the url is protected
 */
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
    component: ResetPassword,
  },
  {
    path: '/article',
    name: 'Article',
    protected: true,
    component: Article,
  },
  {
    path: '*',
    name: '404',
    component: PageNotFound,
  },

];

export default routes;
