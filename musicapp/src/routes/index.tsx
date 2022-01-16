import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import ContainerLayout from "../pages/ContainerLayout";

// Lazy Loading components
const TabComponent = React.lazy(() => import("../components/Tab"));
const PlaylistComponent = React.lazy(() => import("../components/Playlist"));
const NotFoundComponent = React.lazy(() => import("../pages/PageNotFound"));

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <ContainerLayout exact path="/" component={TabComponent} />
      <ContainerLayout exact path="/playlist" component={PlaylistComponent} />
      <Route path="*" component={NotFoundComponent} />
    </Switch>
  </Suspense>
);

export default AppRoutes;
