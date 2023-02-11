import { Server, Socket } from "socket.io";

interface User {
    id: string;
    name: string;
    points: number;
}

const users: User[] = [];

export const usersData = (socket: Socket, io: Server) => {

    socket.on('disconnect', () => {
        console.log('user disconnected');
        users.splice(users.findIndex((user) => user.id === socket.id), 1);
        io.emit('users', users.map(u => u.name));
    });

    socket.on('login', (data: any) => {
        users.push({
            id: socket.id,
            name: data,
            points: 0
        });
        io.emit('users', users.map(u => u.name));
    });
}