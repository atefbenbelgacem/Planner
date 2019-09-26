import React from "react";
import { connect } from "react-redux";
import * as mutations from "../store/mutations";

const LoginComponent = ({ authenticateUser, authenticated }) => {
  return (
    <div className="card p-3 col-6">
      <h2>Please Login</h2>
      <form onSubmit={authenticateUser}>
        <input
          type="text"
          placeholder="userName"
          name="userName"
          defaultValue="Dev"
          className="form-control"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          defaultValue=""
          className="form-control mt-2"
        />
        {authenticated === mutations.NOT_AUTHENTICATED ? (
          <p>Login Incorrect</p>
        ) : null}
        <button type="submit" className="form-control mt-2 btn btn-primary">Login</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ session }) => ({
  authenticated: session.authenticated
});

const mapDispatchToProps = dispatch => ({
  authenticateUser(e) {
    e.preventDefault();
    let userName = e.target["userName"].value;
    let password = e.target["password"].value;
    dispatch(mutations.requestAuthUser(userName, password));
  }
});

export const ConnectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
