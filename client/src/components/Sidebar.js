import React, { Component } from "react";

import { FaUserCircle, FaUsers, FaComments } from "react-icons/fa";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.handleSelectChatroom = this.handleSelectChatroom.bind(this);
  }

  handleSelectChatroom = (id, name) => {
    this.props.selectChatroom(id, name);
  };

  handleSelectUser = (id, name) => {
    this.props.selectUser(id, name);
  };

  render() {
    const usersList = this.props.users ? this.props.users : [];
    const chatroomsList = this.props.chatrooms ? this.props.chatrooms : [];
    const currentUser = this.props.currentUser;

    return (
      <aside className="sidebar side-bar">
        <div className="heading row well-sm well">
          <h3 className="app-name col-md-8">Reaktor Chat</h3>
          <div className="logo col-md-4">
            <img
              className="side-logo"
              alt="reacktor logo"
              src="../images/reaktor-logo.png"
            />
          </div>
        </div>
        <div className="current-user row">
          <h3 className="col-md-8">
            <FaUserCircle /> <span>{currentUser.nickname}</span>
          </h3>
          <div className="col-md-2" />
        </div>

        <div className="panel panel-default   panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">
              <FaUsers /> Users
            </h3>
          </div>
          <div className="panel-body users-panel" ref="users">
            {usersList.map(({ nickname, id }) => {
              if (nickname !== currentUser.nickname) {
                const classNames = "";
                return (
                  <div
                    key={id}
                    className={`row user-entry ${classNames}`}
                    onClick={() => {
                      this.handleSelectUser(id, nickname);
                    }}
                  >
                    <p className="user-initial col-md-1">
                      {nickname[0].toUpperCase()}
                    </p>
                    <p className="user-info col-md-10">
                      <span className="name">{nickname}</span>
                    </p>
                  </div>
                );
              } else return null;
            })}
          </div>
        </div>

        <div className="panel panel-default   panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">
              <FaComments /> Chat Rooms
            </h3>
          </div>
          <div className="panel-body rooms-panel" ref="rooms">
            {chatroomsList.map(({ id, name }) => {
              if (name) {
                const classNames = "";
                return (
                  <div
                    key={id}
                    className={`row room-entry ${classNames}`}
                    onClick={() => {
                      this.handleSelectChatroom(id, name);
                    }}
                  >
                    <p className="room-initial col-md-1">
                      {name[0].toUpperCase()}
                    </p>
                    <p className="room-info col-md-10">
                      <span className="name">{name} </span>
                    </p>
                  </div>
                );
              } else return null;
            })}
          </div>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
