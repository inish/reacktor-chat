import React, { Component } from "react";
import { LoginForm } from "../containers/LoginForm";

import { Sidebar } from "../containers/Sidebar";
import { Chat } from "../containers/ChatContainer/Chat";

class Layout extends Component {
  render() {
    const currentUser = this.props;
    return !currentUser.currentUser.id ? (
      <LoginForm className="container" />
    ) : (
      <div>
        <div className="main-container">
          <Sidebar />
          <Chat />
        </div>
      </div>
    );
  }
}

export default Layout;
