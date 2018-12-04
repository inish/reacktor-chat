const UserChat = require("./UserChat");
const { USERS_LIST } = require("./constants/ActionTypes");
const uuidv4 = require("uuid/v4");

module.exports = function() {
  const usersList = new Map();
  const usersChats = new Map();

  function isUser(username) {
    return Array.from(usersList.values()).filter(c => c.nickname === username);
  }

  function registerUser(user, nickname) {
    const userObj = {
      user,
      nickname
    };
    usersList.set(user.id, userObj);
  }

  function removeUser(user) {
    usersChats.forEach((chat, id) => {
      const data = chat.getUserChatData();
      if (data.firstUser.id === user.id || data.secondUser.id === user.id)
        usersChats.delete(id);
    });

    usersList.delete(user.id);
  }
  function createUserChat(firstID, secondID) {
    const id = uuidv4();
    const firstUser = usersList.get(firstID);
    const secondUser = usersList.get(secondID);
    if (!secondUser || !firstUser) return "ERROR";
    const userChat = UserChat({
      id,
      users: {
        firstUser: {
          id: firstID,
          nickname: firstUser.nickname
        },
        secondUser: {
          id: secondID,
          nickname: secondUser.nickname
        }
      },
      clients: {
        firstClient: firstUser,
        secondClient: secondUser
      }
    });
    usersChats.set(id, userChat);

    return id;
  }

  function checkExistingChat(first, second) {
    let finalID;
    usersChats.forEach((chat, id) => {
      const data = chat.getUserChatData();
      if (
        (data.firstUser.id === first && data.secondUser.id === second) ||
        (data.firstUser.id === second && data.secondUser.id === first)
      ) {
        finalID = id;
      }
    });
    return finalID;
  }

  function getUserChatByID(chatID) {
    return usersChats.get(chatID);
  }

  function getUserById(id) {
    return usersList.get(id) || {};
  }

  function getUsersList() {
    return Array.from(usersList.values()).map(c => serialize(c));
  }

  function serialize(c) {
    return {
      id: c.user.id,
      nickname: c.nickname
    };
  }

  function broadcastToAllUser(message) {
    usersList.forEach(user => {
      user.user.emit(USERS_LIST, message);
    });
  }

  return {
    isUser,
    registerUser,
    removeUser,
    getUserById,
    getUsersList,
    broadcastToAllUser,
    createUserChat,
    getUserChatByID,
    checkExistingChat
  };
};
