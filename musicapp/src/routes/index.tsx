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

// const TabComponent = React.lazy(() => import("../components/Tab"));

import Tab from "../components/Tab";
import Playlist from "../components/Playlist";
import Layout from "../container/Layout";
import NotFound from "../components/NotFoundPage";

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Layout exact path="/" component={Tab} />
      <Layout exact path="/playlist" component={Playlist} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Suspense>
);

export default AppRoutes;
