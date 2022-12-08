import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from 'cors';
import { usersData } from "./data/users";

const app = express();
const port = 8080;

const httpServer = createServer(app);
const io = new Server(httpServer, {
    transports: ["polling"],
    cors: {
      origin: "*",
    },
});

io.on('connection', (socket) => {
    console.log('a user connected');

    usersData(socket);

    // socket.broadcast.emit('users', ['test']);
});

app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello world!");
});

httpServer.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
