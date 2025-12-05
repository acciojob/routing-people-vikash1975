import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import UserDetails from "./UserDetails";
import UserList from "./UserList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route path="/users/:id" component={UserDetails} />  {/* fix: added / */}
      </Switch>
    </Router>
  );
}

export default App;