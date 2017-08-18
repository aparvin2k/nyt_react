// Include the React library
import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

// Reference the high-level components
import Main from "../Components/Main";
import Search from "../Components/Children/Search";
import Saved from "../Components/Children/Saved";
import Results from "../Components/Children/Results";

// Export the Routes
var routes = (

    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="Search" component={Search} />
  
        <Route path="/saved" component={Saved} />
        <IndexRoute component={Search} />
      </Route>
    </Router>
);

export default routes;
