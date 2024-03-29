import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import history from "./utils/history";



//import App from './App';


//Routes
//import AppRoutes from './routes';
//render(<App/>, document.getElementById('app'));

//Components
//import App from './App';

import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";

const onRedirectCallback = appState => {
    history.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  };

  render(
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </Auth0Provider>,
    document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




