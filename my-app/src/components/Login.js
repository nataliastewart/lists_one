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

let initialState = {
  username: "",
  password: "",
  isFetching: false,
};

function Login() {
  const [login, setLogin] = useState(initialState);

  const onInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const { push } = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin({ ...login, isFetching: true });
    axiosWithAuth()
      .post("/api/auth/login", login)
      .then((res) => {
        console.log("LOGIN RES:", res);
        localStorage.setItem("token", res.data.token);
        push("/todolist");
      })
      .catch((err) => console.log("LOGIN Error:", err));
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
              value={login.username}
              onChange={onInputChange}
              placeholder="username"
              name="username"
              type="text"
            />
            <input
              value={login.password}
              onChange={onInputChange}
              placeholder="Password"
              name="password"
              type="password"
            />
          </div>
        </div>
        <div className="form-group submit">
          <button>Submit</button>
          Still don't have an account?
          <Link className="signup-link" to="/signup">
            Sign Up
          </Link>
        </div>
      </StyledContainer>
      {login.isFetching && "Please wait...logging you in"}
    </form>
  );
}

export default Login;
