import { store } from "../store";
import React from "react";
import { Provider } from "react-redux";
import { ConnectedDashboard } from "./Dashboard";
import { ConnectedLogin } from "./Login";
import { Router, Route } from "react-router-dom";
import { history } from "../store/history";
import { ConnectedNavigation } from "./Navigation";
import { ConnectTaskDetails } from "./TaskDetails";
import { Redirect } from "react-router";

const RouteGuard = Component => ({ match }) => {
  console.info("route guard...  ", match);
  if (!store.getState().session.authenticated && match.url === '/') {
    return <Component match={match} />;
  } if(!store.getState().session.authenticated){
    return <Redirect to="/" />;
  } if(store.getState().session.authenticated && match.url === '/'){
    return <Redirect to="/dashboard" />;
  }else{
    return <Component match={match} />;
  }
};

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation />
        <Route exact path="/" render={RouteGuard(ConnectedLogin)}/>
        <Route
          exact
          path="/dashboard"
          render={RouteGuard(ConnectedDashboard)}
        />

        <Route exact path="/task/:id" render={RouteGuard(ConnectTaskDetails)} />
      </div>
    </Provider>
  </Router>
);
