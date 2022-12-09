import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from 'cors';
import { usersData } from "./data/users";
import { next, questionsData } from "./data/questions";

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
    questionsData(socket);

    // socket.broadcast.emit('users', ['test']);
});

app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get("/next/:id", (req, res) => {
    const question = next();
    io.emit("question", question);

    res.json(question);
});

httpServer.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
