import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(this.state.nickname);
  };

  handleChange = e => {
    this.setState({ nickname: e.target.value });
  };
  render() {
    const error = this.props.error;

    return (
      <div className="login container">
        <img
          className="login-logo"
          alt="reaktor logo"
          src="../images/reaktor-logo.png"
        />
        <h2>Welcome to Reaktor Chat </h2>
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className={`form-group ${error && "has-error"}`}>
            <label htmlFor="nickname">
              <h4>Choose your nickname</h4>
            </label>

            <input
              className="form-control"
              value={this.state.nickname}
              type="text"
              id="nickname"
              placeholder={"choose a nickname"}
              onChange={this.handleChange}
              required
            />
          </div>
          {error && (
            <div className="alert alert-danger" role="alert">
              <span
                className="glyphicon glyphicon-exclamation-sign"
                aria-hidden="true"
              />
              <span className="sr-only">Error:</span>
              {error ? error : null}
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default LoginForm;
