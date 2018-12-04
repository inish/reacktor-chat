const { MESSAGE_RECEIVED } = require("./constants/ActionTypes");

module.exports = function({ id, users, clients }) {
  let chatHistory = [];

  function getNextChatHistoryID(chatID) {
    return chatHistory.length;
  }

  function sendMessageToChat(message) {
    clients.firstClient.user.emit(MESSAGE_RECEIVED, message);
    clients.secondClient.user.emit(MESSAGE_RECEIVED, message);
  }

  function addMessage(entry) {
    chatHistory = chatHistory.concat(entry);
  }

  function getUserChatData() {
    return {
      id,
      firstUser: users.firstUser,
      secondUser: users.secondUser
    };
  }

  function getChatHistory() {
    return chatHistory.slice();
  }

  return {
    getNextChatHistoryID,
    addMessage,
    sendMessageToChat,
    getUserChatData,
    getChatHistory
  };
};
