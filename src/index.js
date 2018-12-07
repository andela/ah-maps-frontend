import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './assets/styles/scss/index.sass';
import './assets/styles/scss/App.sass';
import { store } from './redux/store';
import routes from './routes/index';
import * as serviceWorker from './serviceWorker';
import Login from './views/Login';
import { PrivateRoute } from './routes/Private';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        {routes.map((prop) => {
          if (prop.protected) {
            return (
              <PrivateRoute
                exact
                path={prop.path}
                component={prop.component}
                key={prop.path}
              />
            );
          }
          return <Route exact path={prop.path} component={prop.component} key={prop.path} />;
        })}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
