import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Tree } from './components/tree';
import { Table } from './components/table';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tree">Tree</Link>
            </li>
            <li>
              <Link to="/table">Table</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/tree">
            <Tree />
          </Route>
          <Route path="/table">
            <Table />
          </Route>
          <Route path="/">
            <div>Select page</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
