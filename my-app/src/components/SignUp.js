import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function SignUp(props) {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const initialUsers = [];

  const [values, setValues] = useState(initialValues);
  const { push } = useHistory();

  const [users, setUsers] = useState(initialUsers);

  const postNewUser = () => {
    axiosWithAuth()
      .post(`api/auth/register`, newUser)
      .then((res) => {
        console.log("postNewUser -> res.data", res);
        localStorage.setItem("token", res.data.token);
        push(`/login`);

        setUsers([...users, newUser]);
        setValues(initialValues);
        console.log(newUser);
      })
      .catch((err) => console.log(err));
    console.log("postNewUser -> newUser", newUser);
  };

  const inputChange = (evt) => {
    const { name, value } = evt.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const newUser = {
    username: values.username,
    email: values.email,
    password: values.password,
    id: Date.now(),
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    postNewUser(newUser);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Register Here</h2>
        {/* <div className='input'> */}

        <h4>Username:</h4>
        <input
          value={values.username}
          onChange={inputChange}
          name="username"
          type="text"
        />

        {/* </div> */}

        <h4>Email:</h4>
        <input
          value={values.email}
          onChange={inputChange}
          name="email"
          type="email"
        />

        <h4>Password:</h4>
        <input
          value={values.password}
          onChange={inputChange}
          name="password"
          type="password"
        />

        <button onSubmit={handleSubmit}>Join Us!</button>
      </form>
      <p>already have an account?</p>
      <h3>
        {" "}
        <Link to="/login"> Login Here</Link>{" "}
      </h3>
    </>
  );
}
