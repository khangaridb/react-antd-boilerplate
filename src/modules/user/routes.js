import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import UserList from './containers/UserList';

const Routes = () => {
  const { path } = useRouteMatch();

  const listPath = `${path}/list`;

  return (
    <Switch>
      <Redirect exact from={`${path}/`} to={listPath} />
      <Route path={listPath}>
        <UserList />
      </Route>
    </Switch>
  );
};

export default Routes;
