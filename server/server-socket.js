const gameLogic = require("./game-logic");

let io;

const userToSocketMap = {}; // maps user ID to socket object
const socketToUserMap = {}; // maps socket ID to user object

const getSocketFromUserID = (userid) => userToSocketMap[userid];
const getUserFromSocketID = (socketid) => socketToUserMap[socketid];
const getSocketFromSocketID = (socketid) => io.sockets.connected[socketid];

const addUserToGame = (user) => {
  gameLogic.spawnPlayer(user._id);
};

const removeUserFromGame = (user) => {
  gameLogic.removePlayer(user._id);
};

const serverTimer = () => {
  gameLogic.serverTimer();
};

const stopTimer = () => {
  gameLogic.stopTimer();
};

const setBigram = () => {
  gameLogic.setBigram();
};

const bigramUI = () => {
  gameLogic.bigramUI();
};

const sendGameState = () => {
  io.emit("update", gameLogic.gameState);
};

const startRunningGame = () => {
  let winResetTimer = 0;
  setInterval(() => {
    gameLogic.updateGameState();
    sendGameState();
  }, 1000 / 60); // 60 frames per second
};

startRunningGame();

const setWordsList = (words, user) => {
  gameLogic.setWordsList(words, user);
};

const sendName = (user, userId) => {
  gameLogic.sendName(user, userId);
};

const addUser = (user, socket) => {
  const oldSocket = userToSocketMap[user._id];
  if (oldSocket && oldSocket.id !== socket.id) {
    // there was an old tab open for this user, force it to disconnect
    // FIXME: is this the behavior you want?
    oldSocket.disconnect();
    delete socketToUserMap[oldSocket.id];
  }

  userToSocketMap[user._id] = socket;
  socketToUserMap[socket.id] = user;
};

const removeUser = (user, socket) => {
  if (user) delete userToSocketMap[user._id];
  delete socketToUserMap[socket.id];
};

module.exports = {
  init: (http) => {
    io = require("socket.io")(http);

    io.on("connection", (socket) => {
      console.log(`socket has connected ${socket.id}`);
      socket.on("disconnect", (reason) => {
        const user = getUserFromSocketID(socket.id);
        removeUser(user, socket);
      });
    });
  },

  addUser: addUser,
  removeUser: removeUser,
  addUserToGame: addUserToGame,
  removeUserFromGame: removeUserFromGame,
  serverTimer: serverTimer,
  stopTimer: stopTimer,
  setBigram: setBigram,
  bigramUI: bigramUI,
  setWordsList: setWordsList,
  sendName: sendName,

  getSocketFromUserID: getSocketFromUserID,
  getUserFromSocketID: getUserFromSocketID,
  getSocketFromSocketID: getSocketFromSocketID,
  getIo: () => io,
};
