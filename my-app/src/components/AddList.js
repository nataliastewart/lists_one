import React, { useState } from "react";
import { connect } from "react-redux";
import { postList } from "../actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function AddList(props) {
  const initialData = {
    name: "",
    type: 1,
  };

  const [form, setForm] = useState(initialData);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/lists", { name: form.name, type_id: form.type })
      .then((res) => props.postList(res.data.data))
      .catch((err) => console.log(err));
    setForm(initialData);
  };

  return (
    <div className="addlist">
      <h4>Add List</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="List Name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Select Category: </label>
          <select name="type" value={form.type} onChange={handleChange}>
            <option value="1">To Do</option>
            <option value="2">Work</option>
            <option value="3">Shopping</option>
          </select>
        </div>
        <div>
          <button>Add List</button>
        </div>
      </form>
    </div>
  );
}

export default connect(null, { postList })(AddList);
