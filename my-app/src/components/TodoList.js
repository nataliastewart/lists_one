//setup the connect
import React from "react";
import { connect } from "react-redux";
import { getLists } from "../actions";
import AddList from "../components/AddList";

const TodoList = (props) => {
  console.log("PROPS:", props);
  return (
    <div>
      <h3>Welcome to TodoList</h3>

      <div className="AddList">
        <AddList />
      </div>

      <p>Click here to access your lists 👇 </p>
      <img
        src="https://www.pinclipart.com/picdir/big/129-1291707_verification-of-delivery-list-clipboard-symbol-icons-check.png"
        alt="list icon"
        onClick={() => props.getLists()}
      />

      {props.todoList.map((list) => {
        console.log("props inside map:", props);
        return (
          <div key={list.id}>
            <h3>Name: {list.name}</h3>
            {/* <p>List Type:{list.type_id}</p> */}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  //put the info from the initialState in the reducer
  return {
    todoList: state.todoList,
    fetchingLists: state.fetchingLists,
    error: state.error,
  };
};
export default connect(mapStateToProps, { getLists })(TodoList);
