import React, { Component } from "react";

class MessagesList extends Component {
  constructor(props) {
    super(props);
    this.scrollDown = this.scrollDown.bind(this);
  }

  componentDidMount() {
    this.scrollDown();
  }

  componentDidUpdate() {
    this.scrollDown();
  }

  scrollDown() {
    const { messages } = this.refs;
    messages.scrollTop = messages.scrollHeight;
  }

  render() {
    const currentUser = this.props.currentUser;
    const messagesList =
      this.props.chatHistory &&
      this.props.chatHistory.map(({ id, message, owner, time }) => (
        <div
          key={id}
          className={`message-container ${owner === currentUser.nickname &&
            "right"}`}
        >
          <div className="time">{time}</div>
          <div className="data">
            <div className="message">{message}</div>
            <div className="name">{owner}</div>
          </div>
        </div>
      ));
    return (
      <div ref="messages" id="messages-list">
        <ul>{messagesList}</ul>
      </div>
    );
  }
}

export default MessagesList;
