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

socketIO.on("connection", (socket) => {
  console.log(`⚡:${socket.id} user has connected`);

  socket.on("message", (data) => {
    socketIO.emit('response',data)
  });
  socket.on("disconnect", () => {
    console.log("🔥:  user disconnected");
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
