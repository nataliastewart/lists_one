import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp";
import TodoList from "./components/TodoList";
import Home from "./components/Home";
// import UpdateTodo from "./components/UpdateTodo";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/todolist" component={TodoList} />
          {/* <Route path="/updatetodo" component={UpdateTodo} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
