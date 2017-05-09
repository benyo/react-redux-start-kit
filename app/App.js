import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route
        exact
        path="/"
        component={() => (
          <div>React redux start kit</div>
        )}
      />
    </div>
  </Router>
);

export default App;
