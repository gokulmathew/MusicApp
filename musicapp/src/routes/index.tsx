import React, { Suspense, lazy } from "react";
import {
  Route,
  RouteProps,
  Switch,
  BrowserRouter,
  Link,
  Redirect,
  withRouter,
} from "react-router-dom";

const TabComponent = React.lazy(() => import("../components/Tab"));

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path="/" exact={true} component={TabComponent} />

      {/* <Route component={PageNotFoundComponent} /> */}
    </Switch>
  </Suspense>
);

export default AppRoutes;
