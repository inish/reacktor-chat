const datetime = require("node-datetime");

const formatDate = () => {
  let dt = datetime.create();
  return dt.format("H:M");
};

const {
  CHAT_ROOMS,
  USER_VERIFIED,
  ERROR,
  ROOM_JOINED,
  CHAT_STARTED
} = require("./constants/ActionTypes");

module.exports = function(user, userManager, chatroomManager) {
  function handleVerifyUser(data) {
    if (userManager.isUser(data.nickname).length > 0) {
      return user.emit(ERROR, { error: "Nickname already taken" });
    } else {
      userManager.registerUser(user, data.nickname);
      user.emit(CHAT_ROOMS, {
        rooms: chatroomManager.getChatrooms()
      });

      user.emit(USER_VERIFIED, {
        name: data.nickname,
        id: user.id
      });

      userManager.broadcastToAllUser({
        users: userManager.getUsersList()
      });
    }
  }

  function handleChatUser(data) {
    let chatID = userManager.checkExistingChat(user.id, data.id);
    let chat;

    if (!chatID) {
      chatID = userManager.createUserChat(user.id, data.id);
      if (chatID === "ERROR") {
        return user.emit(ERROR, { error: "User doesn't exist" });
      } else {
        chat = userManager.getUserChatByID(chatID);
      }
    } else {
      chat = userManager.getUserChatByID(chatID);
    }

    const chatData = chat.getUserChatData();
    const chatHistory = chat.getChatHistory();

    user.emit(CHAT_STARTED, {
      chatroom: chatData,
      chatHistory: chatHistory,
      chatType: "U"
    });
  }

  function handleJoinRoom(data) {
    const chatroom = chatroomManager.getChatroomByID(data.id);
    if (!chatroom.hasUser(user.id)) chatroom.addUser(user);
    const chatHistory = chatroom.getChatHistory();

    const chatroomSer = chatroom.serialize();
    user.emit(ROOM_JOINED, {
      chatroom: chatroomSer,
      chatHistory: chatHistory,
      chatType: "R"
    });
  }

  function handleSendMessage(data) {
    const message = data.text;

    if (data.chatType === "U") {
      const userChat = userManager.getUserChatByID(data.room);
      const owner = userManager.getUserById(data.owner).nickname;

      if (userChat) {
        const createChatEntry = () => ({
          message,
          time: formatDate(),
          id: userChat.getNextChatHistoryID(),
          roomID: data.room
        });
        const entry = { owner, ...createChatEntry() };
        userChat.addMessage(entry);
        userChat.sendMessageToChat(entry);
      } else {
        user.emit(ERROR, { error: "User isn't online for chat" });
      }
    } else if (data.chatType === "R") {
      const chatroom = chatroomManager.getChatroomByID(data.room);
      const owner = userManager.getUserById(data.owner).nickname;
      const createChatEntry = () => ({
        message,
        time: formatDate(),
        id: chatroom.getNextHistoryID(),
        roomID: data.room
      });

      const entry = { owner, ...createChatEntry() };
      chatroom.addMessage(entry);

      chatroom.broadcastMessage(entry);
    }
  }

  function handleDisconnect() {
    userManager.removeUser(user);
    userManager.broadcastToAllUser({
      users: userManager.getUsersList()
    });
    console.log("user disconnected..." + user.id);
  }

  return {
    handleVerifyUser,
    handleChatUser,
    handleJoinRoom,
    handleSendMessage,
    handleDisconnect
  };
};