//setup the connect
import React from "react";
import { connect } from "react-redux";

const TodoList = () => {
  return (
    <div>
      <h3>Welcome to TodoList</h3>
    </div>
  );
};
export default connect()(TodoList);
