import React, { Component } from "react";

import { FaComment } from "react-icons/fa";
class ChatHeader extends Component {
  render() {
    let chatName = this.props.chatName;
    return (
      <div className="chat-header">
        <h4 className="user-name row">
          <FaComment /> {chatName}
        </h4>
      </div>
    );
  }
}

export default ChatHeader;
