import React, { Component } from "react";
import { MessagesList } from "../../containers/ChatContainer/MessagesList";
import { SendMessage } from "../../containers/ChatContainer/SendMessage";
import { ChatHeader } from "../../containers/ChatContainer/ChatHeader";

class Chat extends Component {
  render() {
    const chatName = this.props.chatName;
    const error = this.props.error;
    return (
      <div className=" chat-room-container">
        {chatName ? (
          <React.Fragment>
            <ChatHeader className="heading" />
            {error ? (
              <div className="list">
                {" "}
                <h3>Chat closed ... {error}</h3>{" "}
              </div>
            ) : (
              <React.Fragment>
                <MessagesList className="list" />
                <SendMessage className="send" />
              </React.Fragment>
            )}
          </React.Fragment>
        ) : (
          <div className="choose">
            <h3>Please select a chat....</h3>
          </div>
        )}
      </div>
    );
  }
}

export default Chat;
