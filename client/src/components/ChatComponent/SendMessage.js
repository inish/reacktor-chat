import React, { Component } from "react";

class SendMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.sendMessage(
      this.state.message,
      this.props.userID,
      this.props.chat.chatroom.id,
      this.props.chat.chatType
    );
    this.setState({ message: "" });
  };

  handleChange = e => {
    this.setState({ message: e.target.value });
  };

  render() {
    return (
      <div className="message-input">
        <form onSubmit={this.handleSubmit} className="message-form ">
          <div className="input-group">
            <input
              id="message"
              type="text"
              className="form-control input-lg"
              value={this.state.message}
              autoComplete={"off"}
              placeholder="Send message...."
              onChange={this.handleChange}
            />
            <span className="input-group-btn">
              <button
                disabled={this.state.message.length < 1}
                type="submit"
                className="send btn btn-primary btn-lg "
              >
                <span className="glyphicon glyphicon-send" aria-hidden="true" />{" "}
                Send{" "}
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default SendMessage;
