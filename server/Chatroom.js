const { MESSAGE_RECEIVED } = require("./constants/ActionTypes");

module.exports = function({ name, id }) {
  const users = new Map();
  let chatHistory = [];

  function broadcastMessage(message) {
    users.forEach(m => {
      m.emit(MESSAGE_RECEIVED, message);
    });
  }

  function addMessage(entry) {
    chatHistory = chatHistory.concat(entry);
  }

  function getChatHistory() {
    return chatHistory.slice();
  }

  function addUser(user) {
    users.set(user.id, user);
  }

  function removeUser(user) {
    users.delete(user.id);
  }

  function hasUser(id) {
    const findUser = users.get(id) || {};
    return findUser.size > 0;
  }

  function getNextHistoryID() {
    return chatHistory.length;
  }

  function serialize() {
    return {
      name,
      id,
      usersCount: users.size
    };
  }

  return {
    broadcastMessage,
    addMessage,
    getChatHistory,
    addUser,
    removeUser,
    serialize,
    hasUser,
    getNextHistoryID
  };
};