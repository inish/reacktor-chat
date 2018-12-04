var app = require("http").createServer();
var io = (module.exports.io = require("socket.io")(app));
console.log("ok");
const ChatroomManager = require("./ChatRoomsManager");
const UserManager = require("./UserManager");
const handlers = require("./Handlers");

const PORT = 3231 ;
const {
  JOIN_ROOM,
  SEND_MESSAGE,
  LOGIN,
  CHAT_USER,
    DISCONNECT
} = require("./constants/ActionTypes");

const chatroomManager = ChatroomManager();
const clientManager = UserManager();

io.on("connection", function(socket) {
  const {
    handleVerifyUser,
    handleJoinRoom,
    handleSendMessage,
    handleChatUser,
    handleDisconnect
  } = handlers(socket, clientManager, chatroomManager);
debugger;
  console.log("user connected...", socket.id);

  socket.on(LOGIN, handleVerifyUser);
  socket.on(CHAT_USER, handleChatUser);
  socket.on(JOIN_ROOM, handleJoinRoom);
  socket.on(SEND_MESSAGE, handleSendMessage);
  socket.on(DISCONNECT, handleDisconnect);
});

app.listen(PORT, () => {
  console.log("Connected to port:" + PORT);
});
