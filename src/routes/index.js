import LandingPage from '../views/Landingpage';
import Login from '../views/Login';
import SignUp from '../views/SignUp';
import ForgotPassword from '../views/ForgotPassword';
import ResetPassword from '../views/ResetPassword';
import PageNotFound from '../components/PageNotFound';
<<<<<<< HEAD
import Article from '../views/Article';
import ArticlesList from '../views/ArticleList';
import ArticleView from '../views/Article/Articleview';
=======
import Intro from '../components/Intro';
>>>>>>> feat(react router): implement authentication on routes (#17)
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
<<<<<<< HEAD
    component: Article,
  },
  {
    path: '/articles',
    name: 'Articles',
    component: ArticlesList,
  },
  {
    path: '/article/:slug',
    name: 'View Article',
    component: ArticleView,
  },
  {
    path: '/article/update/:slug',
    name: 'Update Article',
    protected: true,
    component: Article,
=======
    component: Intro,
>>>>>>> feat(react router): implement authentication on routes (#17)
  },
  {
    path: '*',
    name: '404',
    component: PageNotFound,
  },

];

export default routes;
