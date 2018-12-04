const Chatroom = require("./Chatroom");

const chatroomsList = require("./constants/Chatrooms");

module.exports = function() {
  const chatrooms = new Map(chatroomsList.map(c => [c.id, Chatroom(c)]));

  function removeUser(user) {
    chatrooms.forEach(c => c.removeUser(user));
  }

  function getChatroomByID(roomID) {
    return chatrooms.get(roomID);
  }

  function getChatrooms() {
    return Array.from(chatrooms.values()).map(c => c.serialize());
  }

  return {
    removeUser,
    getChatroomByID,
    getChatrooms
  };
};