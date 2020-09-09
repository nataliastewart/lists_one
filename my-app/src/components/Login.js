import React, { useState } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const StyledContainer = styled.div`
  border: 1px solid rgb(210, 210, 210);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: 8px;
  margin: 4% auto;
  /* padding: 16px 8px 12px 16px; */
  padding: 2% 1% 2% 1%;
  background-color: rgba(255, 255, 255, 0.5);
  width: 20%;
  min-width: 200px;
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div.inputs {
    display: flex;
    flex-direction: column;
  }
  div.extraText {
    font-size: 12px;
    margin: 6% 0 4% 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  div.extraText p {
    margin: auto 0;
  }
`;

let initialFormValues = {
  username: "",
  password: "",
};

function Login() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = (e) => {
    setFormValues({
      [e.target.name]: e.target.value,
    });
  };

  const { push } = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("api/auth/login", formValues)
      .then((res) => {
        console.log("LOGIN RES:", res);
        localStorage.setItem("token", res.data.token);
        push("/todolist");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
      <StyledContainer>
        <div className="form-group inputs">
          <h4>Login</h4>
          <div>
            <input
              value={formValues.username}
              onChange={onInputChange}
              placeholder="username"
              name="username"
              type="username"
            />
            <input
              value={formValues.password}
              onChange={onInputChange}
              placeholder="Password"
              name="password"
              type="password"
            />
          </div>
        </div>
        <div className="form-group submit">
          <button onSubmit={handleSubmit}>Submit</button>
          Still don't have an account?
          <Link className="signup-link" to="/signup">
            Sign Up
          </Link>
        </div>
      </StyledContainer>
    </form>
  );
}

export default Login;
