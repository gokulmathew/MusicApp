import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../container/Layout";

// Lazy Loading components
const TabComponent = React.lazy(() => import("../components/Tab"));
const PlaylistComponent = React.lazy(() => import("../components/Playlist"));
const NotFoundComponent = React.lazy(
  () => import("../components/NotFoundPage")
);

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Layout exact path="/" component={TabComponent} />
      <Layout exact path="/playlist" component={PlaylistComponent} />
      <Route path="*" component={NotFoundComponent} />
    </Switch>
  </Suspense>
);

export default AppRoutes;
