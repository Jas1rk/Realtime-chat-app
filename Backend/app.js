const express = require("express");
const app = express();
const PORT = 4000;

const http = require("http").Server(app);
const cors = require("cors");

const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5173",
  },
});

let users = [];

socketIO.on("connection", (socket) => {
  console.log(`⚡:${socket.id} user has connected`);

  socket.on("message", (data) => {
    socketIO.emit("response", data);
  });

  socket.on("newUser", (data) => {
    users.push(data);
    socket.emit("userResponse", users);
    console.log("This is users", users);
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typingResponse", data);
  });
  
  socket.on("disconnect", () => {
    console.log("🔥:  user disconnected");
    users = users.filter((user) => user.socketIO !== socket.id);
    socket.emit("userResponse", users);
  });
});

app.use(cors());

app.get("/api", (req, res) => {
  res.json({
    message: "Hello world!!",
  });
});

http.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
