import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", firstName: "", lastName:"" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Email Id"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    firstName: Joi.string()
      .required()
          .label("First Name"),
      lastName: Joi.string()
          .required()
          .label("Last Name")
  };

  doSubmit = async () => {
    try {
        const { data:jwt } = await userService.register(this.state.data);
        debugger;
        auth.loginWithJwt(JSON.stringify(jwt));
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 mx-auto">
                    <h1 className="mt-5">Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
                {this.renderInput("firstName", "First Name")}
                {this.renderInput("lastName", "Last Name")}
          {this.renderButton("Register")}
        </form>
                </div>
            </div>
        </div>
    );
  }
}

export default RegisterForm;
